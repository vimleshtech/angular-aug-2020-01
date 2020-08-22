import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMystyle]'
})
export class MystyleDirective {

  constructor(obj:ElementRef) { 

      obj.nativeElement.style.color="red";
      obj.nativeElement.style.backgroundColor="orange";
      obj.nativeElement.innerHTML="<input type='text' />"
      obj.nativeElement.innerHTML+="<input type='button'  value='Add'/>"


  }

}
