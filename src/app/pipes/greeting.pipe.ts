import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greeting',
})
export class GreetingPipe implements PipeTransform {
  transform(date: Date, ...args: any[]): any {
    const hrs = date.getHours();

    if (hrs < 12) {
      return 'Good Morning';
    }
    if (hrs >= 12 && hrs < 18) {
      return 'Good Afternoon';
    }
    if (hrs >= 18 && hrs < 21) {
      return 'Good Evening';
    }
    if (hrs >= 21 && hrs <= 24) {
      return 'Good Night';
    }
  }
}
