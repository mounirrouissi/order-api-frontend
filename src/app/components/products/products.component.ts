import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[]=[];
  

  constructor(private apiService:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
     const categoryId= Number(this.route.snapshot.paramMap.get("id"));
     console.log("cat Id="+categoryId)
if (categoryId  != null){

  this.getProductsByCategory(categoryId)
}else{
  this.getProducts();

}
  }
  getProductsByCategory(id:number) {
    this.apiService.getProductsByCategory(id).subscribe(
      res=>{this.products=res}
    )
  }
  getProducts() {
    this.apiService.getAllProducts().subscribe(
      res=>{this.products=res}
    )
  }

  
}
