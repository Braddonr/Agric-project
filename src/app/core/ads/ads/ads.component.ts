import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { CartService } from 'src/app/shared/landing/landingpage/services/cart.service';
import { ProductsService } from 'src/app/shared/landing/landingpage/services/products.service';
import { Observable, Observer } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {


  categories: any[] = [];
  public productList: any;
  public totalItem: number = 0;
  public grandTotal!: number;
  data: any;
  categoryList: any[] = [];

  // public file: any[]  = [];
  file: any
  constructor(private http: HttpClient, private router: Router, private products: ProductsService, private cartService: CartService, private msg: NzMessageService) { }


  onFileChanged(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadFile(file);
    }
  }

  imageForm = new FormData()
  imgName = ""

  uploadFile(file: File) {
    // const formData = new FormData();
    this.imageForm.append('file', file);
    this.imgName = file.name

    // console.log(formData.get('file'));
  }

  uploadProductForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    categoryName: new FormControl('', Validators.required),
    aggregate: new FormControl('',Validators.required),
    description: new FormControl('', Validators.required),
    imageURL: new FormControl('', Validators.required),
  })


  uploadproduct() {

    this.http.post<any>('https://digitalfarming.herokuapp.com/api/v4/uploadingImages/images/upload', this.imageForm)
      .subscribe(
        (res) => {
          saveProduct()
        },
        (err) => console.log(err)
      );

    const saveProduct = () => {
      console.log("thid")
      this.uploadProductForm.value.imageURL = this.imgName;
      console.log(this.uploadProductForm.value)
      this.http.post<any>("https://digitalfarming.herokuapp.com/api/v3/product/createProduct", this.uploadProductForm.value)
        .subscribe(res => {
          alert("product  uploaded successfully.!");
          this.router.navigate(['/shared/landingpage']);
          this.uploadProductForm.reset();
        }, err => {
          alert("There was an error uploading the product!")
        })

    }

  }

  openTab = 1;
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  ngOnInit(): void {

    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      });

    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();
      });



    this.getCategories()
  }

  getCategories() {
    this.http.get('https://digitalfarming.herokuapp.com/api/v2/controller/displayAllCategoryNames').subscribe((response: any) => {
      this.data = response['categoryName']
      this.data.map((x: any) => {
        this.categoryList.push(x.categoryName)
        console.log(this.categoryList);
      })
    });
  }

  // getCategories(){
  // this.products.getCategoryName()
  //   .subscribe(res =>{

  //     this.categories = res;
  //     console.log(this.categories);

  //   })
  // }

  loading = false;
  avatarUrl?: string;


  beforeUpload = (file: NzUploadFile, _fileList: NzUploadFile[]): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif';
      if (!isJpgOrPng) {
        this.msg.error('You can only upload JPG, PNG, or GIF file!');
        observer.complete();
        return;
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 5MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }

}
