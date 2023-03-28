import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../../landingpage/services/cart.service';
import { ProductsService } from '../../landingpage/services/products.service';

@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit{

  public productList : any;
  public items : any =[];
  public totalItem : number = 0;
  public grandTotal !: number;
  myForm!: FormGroup;
  selectedFile: any;
  constructor(private products: ProductsService, private cartService : CartService, private formBuilder: FormBuilder, private http: HttpClient) {}


ngOnInit(): void {

  this.myForm = this.formBuilder.group({
    name: ['', Validators.required],
    contacts: ['', Validators.required],
    farmDetails: ['', Validators.required],
    farmingPractices: ['', Validators.required],
    productInfo: ['', Validators.required],
    socialMedia: ['', Validators.required],
    farmingDocument: ['']
  });

    this.products.getProduct()
    .subscribe(res =>{
      this.productList = res;

    //   this.productList.forEach((a:any) =>{
    //     Object.assign(a, {quantity: 1, total: a.price});
    //  });
    })

    this.cartService.getProducts()
    .subscribe(res =>{
      this.items = res;
       this.grandTotal = this.cartService.getTotalPrice();        
    })

    this.cartService.getProducts()
       .subscribe(res=>{
         this.totalItem = res.length;
       })


  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }

  
  onSubmit(){

  const formData = new FormData();
  formData.append('name', this.myForm.value.name);
  formData.append('contacts', this.myForm.value.contacts);
  formData.append('farmDetails', this.myForm.value.farmDetails);
  formData.append('farmingPractices', this.myForm.value.farmingPractices);
  formData.append('productInfo', this.myForm.value.productInfo);
  formData.append('socialMedia', this.myForm.value.socialMedia);
  formData.append('farmingDocument', this.selectedFile, this.selectedFile.name);


  this.http.post<any>("https://digitalfarming.herokuapp.com/displayFarmerProfile", this.myForm.value)
  .subscribe({
   next:(res)=> {
    alert("Farmer details updated");
     this.myForm.reset();
   },
   error:()=>{
     alert("Farmer details were not updated");
   },
  })
    
  }

}