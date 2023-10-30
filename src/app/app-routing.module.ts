import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
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
  },
  {
    path: 'boleta-factura',
    loadChildren: () => import('./boleta-factura/boleta-factura.module').then( m => m.BoletaFacturaPageModule)
  },
  {
    path: 'registro-proveedor',
    loadChildren: () => import('./registro-proveedor/registro-proveedor.module').then( m => m.RegistroProveedorPageModule)
  },
  {
    path: 'home-admin',
    loadChildren: () => import('./home-admin/home-admin.module').then( m => m.HomeAdminPageModule)
  },  {
    path: 'gestion-clientes',
    loadChildren: () => import('./gestion-clientes/gestion-clientes.module').then( m => m.GestionClientesPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
