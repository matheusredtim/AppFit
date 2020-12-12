import { Component, OnInit } from '@angular/core';
import { Nutrientes } from 'src/models/Nutrientes';
import { NutrientesService } from 'src/services/NutrientesService';

@Component({
  selector: 'app-calcular-nutrientes',
  templateUrl: './calcular-nutrientes.page.html',
  styleUrls: ['./calcular-nutrientes.page.scss'],
})
export class CalcularNutrientesPage implements OnInit {

  public nutrientes : Nutrientes = new Nutrientes()
  constructor(private _nutrientesService:NutrientesService) {
    
   }

  ngOnInit() {
  }
    calcularnutriente(){

      this._nutrientesService.calcularNutrientes(this.nutrientes);
      
  }

}
