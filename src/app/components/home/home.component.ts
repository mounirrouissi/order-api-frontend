import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
categories:Categorie[]=[]
  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
    this.getAllCategories()
  }
  getAllCategories() {
    this.apiService.getAllCategories().subscribe(
      res=>{this.categories=res}
    )
  }

}
