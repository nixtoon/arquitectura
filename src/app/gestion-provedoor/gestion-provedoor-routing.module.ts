import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionProvedoorPage } from './gestion-provedoor.page';

const routes: Routes = [
  {
    path: '',
    component: GestionProvedoorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionProvedoorPageRoutingModule {}
