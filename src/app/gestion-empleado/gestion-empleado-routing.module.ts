import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionEmpleadoPage } from './gestion-empleado.page';

const routes: Routes = [
  {
    path: '',
    component: GestionEmpleadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionEmpleadoPageRoutingModule {}
