import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcularNutrientesPage } from './calcular-nutrientes.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularNutrientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcularNutrientesPageRoutingModule {}
