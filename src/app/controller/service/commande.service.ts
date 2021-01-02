import { Injectable } from '@angular/core';
import { Commande } from '../model/commande.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class CommandeService {

 // private url: string = "http://localhost:8099/commande-api-v3/commandes/";

  private commandeCreate: Commande = new Commande('', '', '');
  private commandes: Array<Commande>;

  constructor(private http: HttpClient, private router: Router) { }

  public  addCommande(){
    alert('Bienvenue');
  }
  public saveCommande(){
    this.http.post<Commande>('http://localhost:8099/commande-api-v3/commandes/', this.commandeCreate).subscribe({
      next: data => {
        console.log('ok');
        alert('Commande effectuee !');
      } , error: error => {
        console.log('erreur');
      }
    });
  }
  public deleteCommande(reference: string){

   // if (this.commandeCreate != null){
      this.http.delete('http://localhost:8099/commande-api-v3/commandes/reference/' + reference, {}).subscribe(
        data => {
          console.log('deleted ...');
          alert('Commande supprimée');
        }, error => {
          console.log('commande non supprimée');
        });
      this.router.navigate(['/commandes/commande-create']);
  //  }

  }
  get commandeCreateRecup(): Commande {
    return this.commandeCreate;
  }

  set commandeCreateModif(value: Commande) {
    this.commandeCreate = value;
  }

  get getListeCommandes(): Array<Commande> {
    if (this.commandes == null){
      this.http.get<Array<Commande>>('http://localhost:8099/commande-api-v3/commandes/listeCommandes/').subscribe(
        data => {
          this.commandes = data;
        } ,  error => {
          console.log('error whith loading commandes');
        }
      );
    }
    return this.commandes;
  }

  set setListeCommandes(value: Array<Commande>) {
    this.commandes = value;
  }

  get commande(): Commande {
    return this.commande;
  }

}
