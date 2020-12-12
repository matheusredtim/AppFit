import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcularTaxaMetabolicaPage } from './calcular-taxa-metabolica.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularTaxaMetabolicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcularTaxaMetabolicaPageRoutingModule {}
