import { Component, OnInit } from '@angular/core';
import { Rmf } from 'src/models/Rmf';
import { RmfService } from 'src/services/RmfService';

@Component({
  selector: 'app-calcular-rmf',
  templateUrl: './calcular-rmf.page.html',
  styleUrls: ['./calcular-rmf.page.scss'],
})
export class CalcularRmfPage implements OnInit {

  public rmf : Rmf = new Rmf()
  constructor(private _rmfService:RmfService) {
    
   }

  ngOnInit() {
  }
    calcular(){

      this._rmfService.calcularPercentual(this.rmf);
      
  }

}

