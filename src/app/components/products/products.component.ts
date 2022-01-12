import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[]=[];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
     this.getProducts();
  }
  getProducts() {
    this.apiService.getAllProducts().subscribe(
      res=>{this.products=res}
    )
  }
}
