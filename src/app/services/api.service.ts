import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from '../models/categorie';
import { Client } from '../models/client';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  baseUrl: string="http://localhost:8082/api/v1/";
  



  constructor(private http:HttpClient) { 
}



//CLients API
//add
addClient(client:Client):Observable<any> {
return this.http.post<any>(this.baseUrl+"clients",client)
}

//getAll

public getAllClients():Observable<Client[]>
{
return this.http.get<Client[]>(this.baseUrl+"clients")
}

//Produit API

public getAllProducts():Observable<Product[]>
{
return this.http.get<Product[]>(this.baseUrl+"produits")
}


//categories API
getAllCategories():Observable<Categorie[]> {
return this.http.get<Categorie []>(this.baseUrl+"categories")

}

//products API
getProductsByCategory(catId:number):Observable<Product[]> {
  return this.http.get<Product[]>(this.baseUrl+"/categories/"+catId+"/products");
}



}