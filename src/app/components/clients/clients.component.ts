import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clients: Client[]=[];

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
     this.getClients();
  }
  getClients() {
    this.apiService.getAllClients().subscribe(
      res=>{this.clients=res}
    )
  }

}
