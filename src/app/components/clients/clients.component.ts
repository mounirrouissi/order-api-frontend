import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  clientsList: Client[]=[];
  updateClient:Client={
    id: 0,
    nom: '',
    code: '',
    prenom: '',
    dateNaisance: new Date(),
    address: '',
    ville: '',
    codePostal: 0,
    tel: '',
    fax: '',
    gsm: '',
    email: '',
    commandes: []
  }

  constructor(private apiService:ApiService) {
  
    
       }
    

  ngOnInit(): void {
      
     this.getClients();
  }
  getClients() {
    this.apiService.getAllClients().subscribe(
      res=>{this.clientsList=res}
    )
  }
  onOpenModal(client:Client){
    this.updateClient=client
    const container=document.getElementById("container1")
    const editContainer=document.getElementById("editModal")
    editContainer!!.style.display="block"
    const button=document.createElement("button")
    button.type="button"
    button.style.display="none"
    button.setAttribute("data-toggle","modal")
    button.setAttribute("data-target","#editModal")
container?.appendChild(button)
button.click()


  }
}
