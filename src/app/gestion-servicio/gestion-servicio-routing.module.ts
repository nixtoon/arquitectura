import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionServicioPage } from './gestion-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: GestionServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionServicioPageRoutingModule {}
