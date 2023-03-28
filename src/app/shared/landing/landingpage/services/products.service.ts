import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from './model/products';

@Injectable({ providedIn: 'root' })

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  constructor(private http: HttpClient) { }
  
  
  getProduct(){
    return this.http.get<any>("https://digitalfarming.herokuapp.com/api/v3/product/availableProducts")
    .pipe(map((res: any) =>{
    return res;
    }))
  }


 getCategories() {
  return this.http.get<any>("https://digitalfarming.herokuapp.com/api/v2/controller/availableCategories")
  .pipe(map((res: any) =>{
    return res;
    }))
 }

 getCategoryName(){
  return this.http.get<any>("https://digitalfarming.herokuapp.com/api/v2/controller/displayAllCategoryNames")
  .pipe(map((res: any) =>{
    return res;
    }))

 }


}


