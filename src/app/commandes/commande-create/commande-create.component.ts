import { Component, OnInit } from '@angular/core';
import {CommandeService} from '../../controller/service/commande.service';

@Component({
  selector: 'app-commande-create',
  templateUrl: './commande-create.component.html',
  styleUrls: ['./commande-create.component.css']
})
export class CommandeCreateComponent implements OnInit {

  constructor(
    private commandeService: CommandeService
  ) { }

  ngOnInit(): void {
  }

  public get commande() {
    return this.commandeService.commandeCreateRecup;
  }

  public  addCommande(){
    return this.commandeService.addCommande();
  }
  public saveCommande(){
    return this.commandeService.saveCommande();
  }

  public deleteCommande(reference: string){
    return this.commandeService.deleteCommande(reference);
  }
  public get listeCommandes(){
    return this.commandeService.getListeCommandes;
  }

}
