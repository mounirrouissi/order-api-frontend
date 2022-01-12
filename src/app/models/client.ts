import { Commande } from "./commande";

export interface Client {
    
       id:number;
       nom:string;
       code:string;
       prenom:string;
       dateNaisance:Date;
      address:string;
      ville:string;
      codePostal:number;
      tel:string;
      fax:string;
      gsm:string;
      email:string;
      commandes:Commande[];

    }
    

