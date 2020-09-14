import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Vocabulary } from '../models/vocabulary.model';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  dbPath = '/dictionary';
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) {}

  async create(data: Vocabulary) {
    const user = await this.afAuth.currentUser;
    return this.db.collection(this.dbPath).add({ ...data, uid: user.uid });
  }

  findAll() {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db
            .collection<Vocabulary>(this.dbPath, (ref) =>
              ref.where('uid', '==', user.uid)
            )
            .valueChanges({ idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }
  delete(id: string) {
    return this.db.collection(this.dbPath).doc(id).delete();
  }

  async update(id: string, data: any) {
    const user = await this.afAuth.currentUser;

    return this.db
      .collection(this.dbPath)
      .doc(id)
      .update({ ...data, uid: user.uid });
  }
}
