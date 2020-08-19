import { Pipe, PipeTransform } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: any,status:string): unknown {

    if(status=='desc'){
      return value.sort().reverse()
      
    }else{
      return value.sort()
    }
    
  }

}
