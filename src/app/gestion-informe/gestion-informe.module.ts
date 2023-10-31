import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionInformePageRoutingModule } from './gestion-informe-routing.module';

import { GestionInformePage } from './gestion-informe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionInformePageRoutingModule
  ],
  declarations: [GestionInformePage]
})
export class GestionInformePageModule {}
