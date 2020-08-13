import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  //declare variable  and set default value 
  pid: number =0
  pname:string  =''
  pprice: number =0
  products=[]
  path="https://www.w3schools.com/images/picture.jpg"

  msg="Hey this is test propesties binding"

  isadmin=false

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    
    this.isadmin = !this.isadmin;

  }
  createProduct(){
    this.products.push({pid:this.pid,pname:this.pname,price:this.pprice})
    console.log(this.products)
  }
  delRow(i){
    //alert(i)
    //splice() method which will remove item from array
    this.products.splice(i,1) //remove one element from given index 
    
  }

  getStatus(){
    return true;

  }
}
