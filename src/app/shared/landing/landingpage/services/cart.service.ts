import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, findIndex, Observable, Subject, throwError } from 'rxjs';
import { Product } from './model/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public totalItem : number = 0;
  public search = new BehaviorSubject<string>(""); //send data being input from search bar
 //you can assign initial value to behaviorsubject, can also act as an observable and for remitting 
  
  public selectedProductdata = new BehaviorSubject<any>([]);
  total1: number = 0 
  product: any;
  total: any;

 constructor(private http: HttpClient,) { }

  //create getter and setter
  getProducts(){
     return this.productList.asObservable();
  }
  setProduct(product: any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any, item: any){

    //check if product already exists in cart
    const found = this.cartItemList.find(
      (item: any) => JSON.stringify(item) === JSON.stringify(product)
    );
    if (found){
    
    //first update the number around plus minus buttons
    product.quantity += 1;

    //then update total of selected product
    product.total = product.quantity * product.price;
    
    this.productList.next(this.cartItemList);
    console.log(this.cartItemList)

     //and assign it to the product object  
    //  this.product((a:any) => {
    //   Object.assign(a, {quantity: product.quantity, total: a.total});
    //  });

     //update total in grandtotal
    

      // // then update in the total items at the header counter
      // // but we first subscribe to it
      // this.getProducts()
      //  .subscribe((res: any)=>{
      //    this.totalItem = res.length;
      //  })
      //  //then now update totalitem
      //    this.totalItem += 1;
      // //  console.log(this.totalItem);
      
    }
//else push product to cart array
    else{
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      console.log(this.cartItemList)
    }
    this.getTotalPrice();
  }
    

   viewedtoCart(product: any){
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
    this.getTotalPrice();
   }

  getTotalPrice(): number{
    let grandTotal = 0;
    // this.cartItemList.map((a: any ) =>{
    //   grandTotal += a.total 
    // })

    grandTotal = this.cartItemList.reduce((accumulator: any, a: any) => {
      return accumulator + a.total;
    },0);

    // this.cartItemList.forEach((a:any) => {
    //   grandTotal += a.total;
    // });
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      //if product id matches with what is in the list, remove it(splice 1 item) 
      if (product.id ===  a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.productList.next(this.cartItemList);
  }
//setter and getter for landing page to pdetails
  setSelectedProductData(product: any){
    this.selectedProductdata.next(product);
  }
  getSelectedProductData(){
    return this.selectedProductdata.asObservable();
  }

  //setter and getter for pdetails to cart
  

  // showUpdatedTotal(newProduct: any){
  //   let updateProduct = this.product.products.find(this.findTotalToUpdate, newProduct.total);
  //   let index = this.product.products.indexOf(updateProduct);

  //   this.product.products[index] = newProduct;
  //   }
    
  //   findTotalToUpdate(newProduct: any){
  //        return newProduct.total === this.total1;
  //   }
  
}
