import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string="http://localhost:8082/api/v1/";

  constructor(private http:HttpClient) { 
}

//CLients API

public getAllClients():Observable<Client[]>
{
return this.http.get<Client[]>(this.baseUrl+"clients")
}

}