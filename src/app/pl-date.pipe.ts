import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'plDate'
})
export class PlDatePipe extends DatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const datePl = super.transform(value, 'medium');
    const dateTab = datePl.split(' ');
    let datePlForm = '';
    switch (dateTab[1]) {
      case 'sty': dateTab[1] = 'stycznia'; break;
      case 'gru': dateTab[1] = 'grudnia'; break;
    }
    dateTab.forEach((el, ind) => {
      if (ind === 2) { el += ' godzina'; }
      datePlForm += el + ' ';
    });
    console.log(value, datePl, dateTab);
    return datePlForm;
  }
}
