import { Component, OnInit } from '@angular/core';
import { TaxaMetabolica } from 'src/models/TaxaMetabolica';
import { TaxaMetabolicaService } from 'src/services/TaxaMetabolicaService';

@Component({
  selector: 'app-calcular-taxa-metabolica',
  templateUrl: './calcular-taxa-metabolica.page.html',
  styleUrls: ['./calcular-taxa-metabolica.page.scss'],
})
export class CalcularTaxaMetabolicaPage implements OnInit {

  public taxaMetabolica : TaxaMetabolica = new TaxaMetabolica()
  constructor(private _taxaMetabolicaService:TaxaMetabolicaService) {
    
   }

  ngOnInit() {
  }
    calcular(){

      this._taxaMetabolicaService.calcularTaxaMetabolica(this.taxaMetabolica);
      
  }

}
