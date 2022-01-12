import { Client } from "./client";
import { LignCommande } from "./lign-commande";

export interface Commande {
      id:number;
      numero:string;
      date:Date;
      prixUnitaire:number;
      etat:number;
      lignCommande:LignCommande[];
      client:Client;
}
