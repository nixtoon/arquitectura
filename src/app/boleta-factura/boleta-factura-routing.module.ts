import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BoletaFacturaPage } from './boleta-factura.page';

const routes: Routes = [
  {
    path: '',
    component: BoletaFacturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoletaFacturaPageRoutingModule {}
