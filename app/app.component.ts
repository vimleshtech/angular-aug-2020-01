import { Component } from '@angular/core';


@Component({    //@Component : annotation or decorator 

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  choice='v'
  text='This is test code'
  data =[111,4,6,7,5,7,333,77.34]

  names = ["divya sinha","vidhi","aman","raman Sharma"]

}
