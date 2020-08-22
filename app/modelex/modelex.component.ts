import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Component({
  selector: 'app-modelex',
  templateUrl: './modelex.component.html',
  styleUrls: ['./modelex.component.css']
})
export class ModelexComponent implements OnInit {

  
  constructor(obj:ProductModel) {

      obj.addProduct(11,'Dove',50,55);
      console.log( obj.getProduct())

   }

  ngOnInit(): void {
  }

}
