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


  //
  total_row = 0
  mark_count = 0
  uumark_count = 0

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    
    this.isadmin = !this.isadmin;

  }
  createProduct(){
    this.products.push({pid:this.pid,pname:this.pname,price:this.pprice,ismark:false})
    console.log(this.products)
    this.summary()
  }
  delRow(i){
    //alert(i)
    //splice() method which will remove item from array
    this.products.splice(i,1) //remove one element from given index 
    this.summary()
  }

  getStatus(){
    return true;

  }

  markRow(i){
      console.log(i);
      this.products[i].ismark  = !this.products[i].ismark 

      console.log(this.products)
      this.summary()
  } 

  summary(){

    this.total_row = this.products.length;
    this.mark_count = this.products.filter(row=>row.ismark==true).length;
    this.uumark_count = this.products.filter(row=>row.ismark==false).length;
    console.log(this.total_row)    
    console.log(this.mark_count)    
    console.log(this.uumark_count)    


  }
  getMarkStatus(i){
    
    return this.products[i].ismark==true? "Unmark" : "Mark";

  }

}
