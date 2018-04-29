import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber'
})
export class PhoneNumberPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    var numString = value.toString();
    var length = numString.length;
    var index = 0;
    if(length == 8){
      index = 1;
      numString = this.insert(numString, '-', index);
      index++;
    }
    numString = this.insert(numString, '-', index + 3);
    return numString;
  }

  insert(full:string, add:string, index:number){
    var length= full.length;
    var first = full.slice(0, index);
    var second = full.slice(index, length);
    full = first + add + second;
    return full;
  }

}
