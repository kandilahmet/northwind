import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product'; 
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = []; 
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) {}  
  //Angular bizim yerimize ProductService ve ActivatedRoute nesnesi için inject işlemi yapar. 
   dataLoaded:boolean=false;
   filterText="";
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){//gelen linkte categoryId name sahip parametre varsa if çalışsın.
        this.getProductsByCategoryId(params["categoryId"]);
      }else{
        this.getProducts(); 
      }
    });
    
  }
getProductsByCategoryId(categoryId:number){
  this.productService.getProductsByCategoryId(categoryId).subscribe(response=>{
    this.products=response.data;
     this.dataLoaded=true;
  });
}
  getProducts() {
   this.productService.getProducts().subscribe(response=>{
     this.products=response.data;
     this.dataLoaded=true;
   });
  } 

  
}
