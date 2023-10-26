import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-user',
    loadChildren: () => import('./registro-user/registro-user.module').then( m => m.RegistroUserPageModule)
  },
  {
    path: 'registro-admin',
    loadChildren: () => import('./registro-admin/registro-admin.module').then( m => m.RegistroAdminPageModule)
  },  {
    path: 'boleta-factura',
    loadChildren: () => import('./boleta-factura/boleta-factura.module').then( m => m.BoletaFacturaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
