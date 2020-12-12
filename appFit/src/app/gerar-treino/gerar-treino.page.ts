import { Component, OnInit } from '@angular/core';
import { Treino } from 'src/models/Treino';
import { TreinoService } from 'src/services/TreinoService';

@Component({
  selector: 'app-gerar-treino',
  templateUrl: './gerar-treino.page.html',
  styleUrls: ['./gerar-treino.page.scss'],
})
export class GerarTreinoPage implements OnInit {

  public treino : Treino = new Treino()
  constructor(private _treinoService:TreinoService) {
    
   }

  ngOnInit() {
  }
    gerar(){

      this._treinoService.gerarTreino(this.treino);
      
  }

}
