import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionProvedoorPageRoutingModule } from './gestion-provedoor-routing.module';

import { GestionProvedoorPage } from './gestion-provedoor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionProvedoorPageRoutingModule
  ],
  declarations: [GestionProvedoorPage]
})
export class GestionProvedoorPageModule {}
