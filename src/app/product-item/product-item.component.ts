import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  id

  constructor(private objActiveRoute:ActivatedRoute, private objRouter:Router,
    private http:HttpClient) { }

  ngOnInit(): void {
    
    this.objActiveRoute.paramMap.subscribe(prams => {

      this.id = prams.get('id')      
      console.log(this.id)

      
      fetch("https://jsonplaceholder.typicode.com/comments?postId="+this.id)
      .then(res=>res.json())
      .then(out=>console.log(out))
      .catch(err=>{
          console.log(err)
      });
      
       
      
        this.http.get("https://jsonplaceholder.typicode.com/comments?postId="+this.id)
        .subscribe((data)=> console.log(data));
      

    });
  }

}
