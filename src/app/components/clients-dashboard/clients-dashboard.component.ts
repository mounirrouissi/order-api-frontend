import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-clients-dashboard',
  templateUrl: './clients-dashboard.component.html',
  styleUrls: ['./clients-dashboard.component.scss']
})
export class ClientsDashboardComponent implements OnInit {
  message=""
  client:Client={
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
  clientForm: FormGroup 

  constructor(private fb:FormBuilder,private apiService:ApiService) {
this.clientForm=fb.group
({
  nom: new FormControl("",Validators.required),
  code: new FormControl,
  prenom: new FormControl,
  dateNaisance: new Date(),
  address: new FormControl,
  ville: new FormControl,
  codePostal: new FormControl("0"),
  tel: new FormControl,
  fax: new FormControl,
  gsm: new FormControl,
  email: new FormControl,
  commandes: new FormControl
})

   }

  ngOnInit(): void {
  }
  addClient(form:FormGroup){
    const client=form.value
    console.log(client)
this.apiService.addClient(client).subscribe(

  res=>{ this.message="Ok sent" },
  error=>{this.message="OError while sending"}
  )
  }
}
