import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ProductsService } from './services/products.service';
import {FilterService} from 'primeng/api';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';
import { SelectItemGroup } from 'primeng/api';
import { AutocompleteOptionGroups } from './autocomplete';

@Component({
  selector: 'app-landingpage',
  // encapsulation: ViewEncapsulation.None,
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingPageComponent implements OnInit {

  public productList : any;
  public totalItem : number = 0;
  searchKey : string = '';
  public searchTerm : string = '';
  public grandTotal!: number;
  choosenCategory : any ;
  categoryList : any[] = [];
  e: any;
  name: any;


  public selectedProduct: any=[]
  item: any;
  public filterCategory : any;

  selectedCategory: any;
  selectedProduce: any;
  selectedItem: any;
  categories: any;
  items: any;
  filteredCategories: any;
  filteredItems: any;
  selectedCategories: any;
  selectedCategoryAdvanced: any;
  filteredBrands: any;
  groupedProduce: SelectItemGroup[] = [];
  filteredGroups: any;

  inputValue?: string;
  optionGroups: AutocompleteOptionGroups[] = [];
  
  filteredOptions: AutocompleteOptionGroups[] = [];
  filteredProducts: AutocompleteOptionGroups[] = [];
 
  
  constructor(private products: ProductsService, private cartService: CartService, private filterService: FilterService, public router: Router) {
    this.filteredOptions = this.optionGroups;
  }

  onChange(value: string): void {
    //filter categories on search bar
    this.filteredOptions = this.optionGroups.filter(option => option.value.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    
    //filter products on search bar
    let i=0
    for(i=0; i<= this.optionGroups.length; i++){
    console.log(this.optionGroups)
    }
    
    for(let option of this.optionGroups){
    this.filteredProducts = this.optionGroups.filter(option =>option.value.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }
  }
   
ngOnInit(): void {
  this.products.getCategories()
  .subscribe(res =>{
    this.categories = res['data'];   
   console.log(this.categories)
    this.categories.map((x: any) => {
      this.categoryList.push(x.categoryName)
    })
    // console.log(this.categoryList)
    
      // console.log(this.categories['categoryName'])
});
  
    this.products.getProduct()
    .subscribe(res =>{
      this.productList = res['products'];
      this.filterCategory = res['products'];
  
      //  console.log(this.productList)
      //  console.log(this.filterCategory)
     
//category names
      
//filter by category
const filtered = this.productList.filter((obj:any) => {
return obj.categoryName === this.choosenCategory
});


       this.items = [];
       for (let i = 0; i < 10000; i++) {
           this.items.push({label: 'Item ' + i, value: 'Item ' + i});
       }
      
//Data for Ng-zorro search bar 1
      //  setTimeout(() =>{
      //   this.optionGroups = [
      //     {
      //       label: filtered1[0].category, value: filtered1[0].category,
      //       items: [
      //         {label: filtered1[0].name, value: filtered1[0].name},
   
      //         {label: filtered1[5].name, value: filtered1[5].name}
      //         ]
      //     },

      //     {
      //       label: filtered5[0].category, value: filtered5[0].category,
      //       items: [
      //         {label: filtered5[0].name, value: filtered5[0].name},
      //         {label: filtered5[1].name, value: filtered5[1].name},
      //         {label: filtered5[2].name, value: filtered5[2].name}
      //         ]
      //     }
      //    ]});

// //Data for Ng-zorro search bar 2
//          this.optionGroups2 = [
//           {
//             label: filtered1[0].category, value: filtered1[0].category,
//             items: [
//               {label: filtered1[0].name, value: filtered1[0].name},
//               {label: filtered1[5].name, value: filtered1[5].name}
//               ]
//           },     
//           {
//             label: filtered5[0].category, value: filtered5[0].category,
//             items: [
//               {label: filtered5[0].name, value: filtered5[0].name},
//               {label: filtered5[1].name, value: filtered5[1].name},
//               {label: filtered5[2].name, value: filtered5[2].name}
//               ]
//           }
//          ]
      // this.e = res;
      // this.productList = this.e.data
      // console.log(this.productList)
//Quantity and total
      this.productList.forEach((a:any) =>{
         Object.assign(a, {quantity: 1, total: a.price});
      });
    });

    this.cartService.getProducts()
    .subscribe(res =>{
      this.products = res;
       this.grandTotal = this.cartService.getTotalPrice();   
    })
//implement counter for header
       this.cartService.getProducts()
       .subscribe(res=>{
         this.totalItem = res.length;
       })

       this.cartService.search.subscribe((val: any) =>{
        this.searchKey = val;
      }) //now acts as observable
    
      
//Autocomplete on search bar and show category/product
    
  }

 addtoCart(product: any,item: any){
     this.cartService.addtoCart(product, item)
    
 }

 search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value; //whatever we input in the search comes here
  console.log(this.searchTerm)
  this.cartService.search.next(this.searchTerm);  //emit searchterm
}
  
  selectProduct(product: any){
    this.selectedProduct.push(product)
    console.log(this.selectedProduct)
    this.cartService.setSelectedProductData(this.selectedProduct);
    this.router.navigate(['core/pdetails'])
  }

  filter(category: string){
   this.filterCategory = this.productList
   .filter((a:any) =>{
      if(a.categoryName == category || category ==''){
        return a;
      }

   });
  }

  //autocomplete
  filterGroup(event:any){
     let filtered : any[] =[];
     let query = event.query;

     for(let i=0; i < this.productList.length; i++){
      let product = this.productList[i];
      if(product.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(product);
      }
    }
  this.filteredCategories = filtered;
  }
    
   filterItems(event:any){
    let filtered : any[] = [];
        let query = event.query;

        for(let i = 0; i < this.items.length; i++) {
            let item = this.items[i];
            if (item.label.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(item);
            }
        }
        this.filteredItems = filtered;
   }

   filterGroupedProduce(event:any) {
    let query = event.query;
    let filteredGroups = [];

    for (let optgroup of this.groupedProduce){
      let filteredSubOptions = this.filterService.filter(optgroup.items, ['label'], query, "contains");
      if (filteredSubOptions && filteredSubOptions.length) {
        filteredGroups.push({
            label: optgroup.label,
            value: optgroup.value,
            items: filteredSubOptions
        });
    }
   }
   this.filteredGroups = filteredGroups;
  }
}
