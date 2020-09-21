import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './graid.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

   products:Product[] = [];

   productid:number;
   search:boolean;
   

  constructor(private serv:ProductService,private router:ActivatedRoute) { }

  ngOnInit() {
    this.getallproducts();
    this.router.paramMap.subscribe( ()=>{
     this.getallproducts();
     this.getsearch();
    });
  }

  getsearch(){
    this.search=this.router.snapshot.paramMap.has('keyword');
    if(this.search){
     this.handelproducts();
     
    }
    else {
      this.getallproducts();
    }
  }

  public handelproducts(){
   const searchkey:string= this.router.snapshot.paramMap.get('keyword');
   this.serv.searchProducts(searchkey).subscribe(data=>{
    this.products = data;
   })
  }

  getallproducts(){
    const hasid:boolean = this.router.snapshot.paramMap.has('id');
    if(hasid){
    this.productid=+this.router.snapshot.paramMap.get('id');
    }
    this.serv.getproductlist(this.productid).subscribe(data=>{
      this.products = data;
      console.log(this.products);
    });
   }
   getcartdetails(details:Product){
    console.log(`${details.name}, ${details.unitPrice}`);
    
       }
  }
