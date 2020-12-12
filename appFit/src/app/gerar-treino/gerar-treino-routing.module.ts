import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerarTreinoPage } from './gerar-treino.page';

const routes: Routes = [
  {
    path: '',
    component: GerarTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerarTreinoPageRoutingModule {}
