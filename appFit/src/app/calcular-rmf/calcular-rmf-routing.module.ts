import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcularRmfPage } from './calcular-rmf.page';

const routes: Routes = [
  {
    path: '',
    component: CalcularRmfPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcularRmfPageRoutingModule {}
