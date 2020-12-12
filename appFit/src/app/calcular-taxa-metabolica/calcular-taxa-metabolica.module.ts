import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcularTaxaMetabolicaPageRoutingModule } from './calcular-taxa-metabolica-routing.module';

import { CalcularTaxaMetabolicaPage } from './calcular-taxa-metabolica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcularTaxaMetabolicaPageRoutingModule
  ],
  declarations: [CalcularTaxaMetabolicaPage]
})
export class CalcularTaxaMetabolicaPageModule {}
