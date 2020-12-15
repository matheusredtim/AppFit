import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcularRmfPageRoutingModule } from './calcular-rmf-routing.module';

import { CalcularRmfPage } from './calcular-rmf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcularRmfPageRoutingModule
  ],
  declarations: [CalcularRmfPage]
})
export class CalcularRmfPageModule {}
