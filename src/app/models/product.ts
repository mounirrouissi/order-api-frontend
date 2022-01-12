import { Categorie } from "./categorie";
import { LignCommande } from "./lign-commande";

export interface Product {
       id:number;
      code:string;
      marque:string;
      modele:string;
      caracteritique:string;
      prixUnitaire:number;
      quantite:number;
      categorie:Categorie;
    lignCommandes:LignCommande[];
}

