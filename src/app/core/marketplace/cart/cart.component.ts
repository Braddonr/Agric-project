import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/shared/landing/landingpage/services/cart.service';
import { Product } from 'src/app/shared/landing/landingpage/services/model/products';
import { ProductsService } from 'src/app/shared/landing/landingpage/services/products.service';
import { RegisterComponent } from 'src/app/shared/auth/register/register.component';
import { User } from 'src/app/shared/auth/user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  public productList : any;
  public cartItemList : any =[]
  public items : any =[];
  public totalItem : number = 0;
  public grandTotal !: number;
  searchKey : string = '';
  public searchTerm : string = '';
  item!: number;
  public selectedProduct: any=[]


  constructor(private register :RegisterComponent , private products: ProductsService, private cartService : CartService, public router : Router) {}

 
   


ngOnInit(): void {
    this.products.getProduct()
    .subscribe(res =>{
      this.productList = res;
      

      this.productList.forEach((a:any) =>{
         Object.assign(a, {quantity: 1, total: a.price});
      });
      
    });

    this.cartService.getProducts()
    .subscribe(res =>{
      this.items = res;
       this.grandTotal = this.cartService.getTotalPrice();   
    })

    this.cartService.getProducts()
       .subscribe(res=>{
         this.totalItem = res.length;
       })

       this.cartService.search.subscribe((val: any) =>{
        this.searchKey = val;
      }) //now acts as observable      
 }


 removeItem(item: any){
     this.cartService.removeCartItem(item);
 }

 addtoCart(product: any, item: any){
  this.cartService.addtoCart(product, item)
}

 quantity: number=1;

 plus(item: any){
    if( item.quantity !=10){
      item.quantity = item.quantity + 1;
      item.total = item.quantity * item.price;
      this.grandTotal = this.cartService.getTotalPrice();   
      }
      
  
   }
   minus(item: any){
    if( item.quantity != 1){
      item.quantity = item.quantity -= 1;
      item.total = item.quantity * item.price;
      this.grandTotal = this.cartService.getTotalPrice(); 
      }
    else if( item.quantity === 1){
      this.removeItem(item)
    }
   }

 search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value; //whatever we input in the search box comes here
  this.cartService.search.next(this.searchTerm);  //emit searchterm
}
selectProduct(product: any){
  this.selectedProduct.push(product)
  // console.log(this.selectedProduct)
  this.cartService.setSelectedProductData(this.selectedProduct);
  this.router.navigate(['core/pdetails'])
}


}
