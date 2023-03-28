import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/shared/landing/landingpage/services/cart.service';
import { Product } from 'src/app/shared/landing/landingpage/services/model/products';
import { ProductsService } from 'src/app/shared/landing/landingpage/services/products.service';



@Component({

  selector: 'app-pdetails',
  templateUrl: './pdetails.component.html',
  styleUrls: ['./pdetails.component.css']
})


  
export class PdetailsComponent implements OnInit{


  public productList : any;
  public totalItem : number = 0;
  searchKey : string = '';
  public searchTerm : string = '';
  public selectedProduct: any = [];
  public grandTotal !: number;
  name: any;
  category: any;
  imageURL: any;
  product : any;
  timePosted : any;
  totalView : any;
  location : any ;
  description : any;
  item: any;
  

  constructor(private products: ProductsService, private cartService: CartService, public router: Router) { }
  


ngOnInit(): void {
    this.products.getProduct()
    .subscribe(res =>{
      this.productList = res["products"];
      console.log(this.productList)

      this.productList.forEach((a:any) =>{
        Object.assign(a, {quantity: 1, total: a.price});
     });
    });

    this.cartService.getProducts()
       .subscribe(res=>{
         this.totalItem = res.length;
       });

       this.cartService.getProducts()
       .subscribe(res =>{
         this.products = res;
         console.log(this.products)
          this.grandTotal = this.cartService.getTotalPrice();   
       })

     this.cartService.search.subscribe((val: any) =>{
      this.searchKey = val;
    }) //now acts as observable  
  
    //get data of selected product from landing page to display
     this.cartService.getSelectedProductData().subscribe(product =>{
          this.selectedProduct = product[0]; 
          // console.log(this.selectedProduct)
          this.category = this.selectedProduct.category;
          this.name =  this.selectedProduct.name
          this.imageURL = this.selectedProduct.imageURL;
          this.timePosted = this.selectedProduct.timePosted;
          this.location = this.selectedProduct.location;
          this.totalView = this.selectedProduct.totalView
          this.description = this.selectedProduct.description
        
     });
  }

 addtoCart(product: any,item: any){
  this.cartService.addtoCart(product, item)
}

 viewedtoCart(selectedProduct: any){
  this.cartService.viewedtoCart(selectedProduct)
}
 quantity: number=1;

 plus(selectedProduct: any){
     if(selectedProduct.quantity !=10){
      selectedProduct.quantity = selectedProduct.quantity + 1;
      selectedProduct.total = selectedProduct.quantity * selectedProduct.price;
     }
 }
 minus(selectedProduct: any){
  if(selectedProduct.quantity !=1){
   selectedProduct.quantity = selectedProduct.quantity -= 1;
   selectedProduct.total = selectedProduct.quantity * selectedProduct.price;
  }
}
 
 search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value; //whatever we input in the search comes here
  this.cartService.search.next(this.searchTerm);  //emit searchterm
}

selectProduct(product: any){
  this.selectedProduct.push(product)
  // console.log(this.selectedProduct)
  this.cartService.setSelectedProductData(this.selectedProduct);
  this.router.navigate(['core/pdetails'])
}

}
