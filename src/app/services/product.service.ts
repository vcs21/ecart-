import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { Productcatagory } from '../common/productcatagory';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {  }
   
   private baseurl = 'http://localhost:8080/api/products';

   private category = 'http://localhost:8080/api/product-category';

   getproductlist(theCategoryId: number): Observable<Product[]> {

    // need to build URL based on category id 
    const searchUrl = `${this.baseurl}/search/findByCategoryId?id=${theCategoryId}`;
     console.log(searchUrl);
    return this.http.get<respo>(searchUrl).pipe(
      map(response => response._embedded.products)
    );
  }
  productcatmenu():Observable<Productcatagory[]>{
    return this.http.get<respotocat>(this.category).pipe(
      map(Response=>Response._embedded.productCategory)
    )
  }
  searchProducts(key:string): Observable<Product[]>{
    const searchUrl = `${this.baseurl}/search/findByNameContaining?name=${key}`;
    return this.getsearchitems(searchUrl);
  }
  getsearchitems(searchurl:string):Observable<Product[]>{
    
  return this.http.get<respo>(searchurl).pipe(
     map(response => response._embedded.products)
   )
}
servdetails(details:number):Observable<Product>{
  const detailskey = `${this.baseurl}/${details}`;
   return this.http.get<Product>(detailskey);

}
}



interface respo{
  _embedded:{
    products:Product[];
  }
  page : {
    size : number
    totalElements :number,
    totalPages: number,
    number : number
  },
}


interface respotocat{
  _embedded:{
    productCategory:Productcatagory[];
}
}
