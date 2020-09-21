import { Component, OnInit } from '@angular/core';
import { Productcatagory } from 'src/app/common/productcatagory';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-cat-menu',
  templateUrl: './product-cat-menu.component.html',
  styleUrls: ['./product-cat-menu.component.css']
})
export class ProductCatMenuComponent implements OnInit {

  constructor(private _service:ProductService) { }
   
  Productcatagory:Productcatagory[];

  ngOnInit() {
    this.gettingcatagorymenu();
  }

  gettingcatagorymenu(){
    this._service.productcatmenu().subscribe(data=>{
      console.log('Product Categories=' + JSON.stringify(data));
      this.Productcatagory = data;
    });
  }
}
