import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionPedidosPage } from './gestion-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: GestionPedidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionPedidosPageRoutingModule {}
