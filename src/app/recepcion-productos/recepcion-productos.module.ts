import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecepcionProductosPageRoutingModule } from './recepcion-productos-routing.module';

import { RecepcionProductosPage } from './recepcion-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecepcionProductosPageRoutingModule
  ],
  declarations: [RecepcionProductosPage]
})
export class RecepcionProductosPageModule {}
