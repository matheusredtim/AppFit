import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcularNutrientesPageRoutingModule } from './calcular-nutrientes-routing.module';

import { CalcularNutrientesPage } from './calcular-nutrientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcularNutrientesPageRoutingModule
  ],
  declarations: [CalcularNutrientesPage]
})
export class CalcularNutrientesPageModule {}
