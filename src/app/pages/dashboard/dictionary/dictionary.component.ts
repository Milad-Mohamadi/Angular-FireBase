import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { Vocabulary } from 'src/app/models/vocabulary.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
})
export class DictionaryComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  form: FormGroup;
  updateForm: FormGroup;
  displayedColumns = ['text', 'mean', 'actions'];
  dataSource: MatTableDataSource<Vocabulary>;
  selectedRow: any;

  constructor(
    private dictionaryService: DictionaryService,
    private fb: FormBuilder,
    public dialog: MatDialog,
    public afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.form = this.fb.group({
      id: [''],
      text: ['', [Validators.required]],
      mean: ['', [Validators.required]],
    });

    this.updateForm = this.fb.group({
      id: [''],
      text: ['', [Validators.required]],
      mean: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.findAll();
  }

  openDeletionDialog(event: any, row: any, template: TemplateRef<any>) {
    event.preventDefault();
    event.stopPropagation();
    this.selectedRow = row;
    this.dialog.open(template, { width: '500px' });
  }

  openUpdateDialog(event: any, row: any, template: TemplateRef<any>) {
    event.preventDefault();
    event.stopPropagation();
    this.updateForm.patchValue({
      id: row.id,
      text: row.text,
      mean: row.mean,
    });
    this.dialog.open(template, { width: '500px' });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  delete(row: Vocabulary) {
    this.dictionaryService.delete(row.id);
    this.closeDialog();
  }

  update(form: FormGroup) {
    if (form.invalid) {
      return;
    }
    const values = this.updateForm.value;
    const body = {
      text: values.text,
      mean: values.mean,
    };
    this.dictionaryService.update(values.id, body);
    this.closeDialog();
  }

  create(form: FormGroupDirective, event: Event) {
    if (form.invalid) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    const values = this.form.getRawValue();
    this.dictionaryService.create({
      text: values.text,
      mean: values.mean,
    });
    form.resetForm();
  }

  findAll() {
    if (!this.afAuth.authState) {
      this.router.navigateByUrl('/user/login');
    }

    this.dictionaryService.findAll().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
    });
  }
}
