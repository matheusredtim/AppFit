import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerarTreinoPageRoutingModule } from './gerar-treino-routing.module';

import { GerarTreinoPage } from './gerar-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerarTreinoPageRoutingModule
  ],
  declarations: [GerarTreinoPage]
})
export class GerarTreinoPageModule {}
