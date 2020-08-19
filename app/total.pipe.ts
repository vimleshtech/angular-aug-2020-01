import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {
  
  transform(value: any ): any {
    var sum=0;
    console.log(value)
    for(let i=0;i<value.length;i++)
      sum+=value[i];
      
    return sum;

  }

}
