import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionInformePage } from './gestion-informe.page';

const routes: Routes = [
  {
    path: '',
    component: GestionInformePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionInformePageRoutingModule {}
