import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionServicioPageRoutingModule } from './gestion-servicio-routing.module';

import { GestionServicioPage } from './gestion-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionServicioPageRoutingModule
  ],
  declarations: [GestionServicioPage]
})
export class GestionServicioPageModule {}
