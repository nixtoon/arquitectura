import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BoletaFacturaPageRoutingModule } from './boleta-factura-routing.module';

import { BoletaFacturaPage } from './boleta-factura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BoletaFacturaPageRoutingModule
  ],
  declarations: [BoletaFacturaPage]
})
export class BoletaFacturaPageModule {}
