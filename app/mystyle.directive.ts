import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMystyle]'
})
export class MystyleDirective {

  constructor(obj:ElementRef) { 

      obj.nativeElement.style.color="red";
      obj.nativeElement.style.backgroundColor="orange";



  }

}
