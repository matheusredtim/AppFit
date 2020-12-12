import { Component, OnInit } from '@angular/core';
import { Calorias } from 'src/models/Calorias';
import { CaloriasService } from 'src/services/CaloriasService';

@Component({
  selector: 'app-calcular-calorias',
  templateUrl: './calcular-calorias.page.html',
  styleUrls: ['./calcular-calorias.page.scss'],
})
export class CalcularCaloriasPage implements OnInit {

  public calorias : Calorias = new Calorias()
  constructor(private _caloriasService:CaloriasService) {
    
   }

  ngOnInit() {
  }
    calcularCaloria(){

      this._caloriasService.calcularCalorias(this.calorias);
      
  }

}
