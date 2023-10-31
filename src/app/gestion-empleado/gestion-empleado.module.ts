import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionEmpleadoPageRoutingModule } from './gestion-empleado-routing.module';

import { GestionEmpleadoPage } from './gestion-empleado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionEmpleadoPageRoutingModule
  ],
  declarations: [GestionEmpleadoPage]
})
export class GestionEmpleadoPageModule {}
