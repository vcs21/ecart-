import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product: Product;
  constructor(private routs:ActivatedRoute,private serve:ProductService) { }

  ngOnInit() {
  this.routs.paramMap.subscribe(()=>{
    this.getidfordetails();
  })
  }
  getidfordetails(){
    const detailesid=+this.routs.snapshot.paramMap.get('id');
    
    this.serve.servdetails(detailesid).subscribe(data=>{
      this.product = data;
    })
     
    }
  
  }



