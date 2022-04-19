import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/componentes/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./pages/componentes/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/componentes/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/componentes/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'accordion',
    loadChildren: () => import('./pages/componentes/accordion/accordion.module').then( m => m.AccordionPageModule)
  },
  {
    path: 'actionsheet',
    loadChildren: () => import('./pages/componentes/actionsheet/actionsheet.module').then( m => m.ActionsheetPageModule)
  },
  {
    path: 'refresh',
    loadChildren: () => import('./pages/componentes/refresh/refresh.module').then( m => m.RefreshPageModule)
  },
  {
    path: 'datetime',
    loadChildren: () => import('./pages/componentes/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/nativos/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'lanterna',
    loadChildren: () => import('./pages/nativos/lanterna/lanterna.module').then( m => m.LanternaPageModule)
  },
  {
    path: 'bateria',
    loadChildren: () => import('./pages/nativos/bateria/bateria.module').then( m => m.BateriaPageModule)
  },
  {
    path: 'card-moshe',
    loadChildren: () => import('./pages/layouts/card-moshe/card-moshe.module').then( m => m.CardMoshePageModule)
  },
  {
    path: 'grid-moshe-usuarios',
    loadChildren: () => import('./pages/layouts/grid-moshe-usuarios/grid-moshe-usuarios.module').then( m => m.GridMosheUsuariosPageModule)
  },
  {
    path: 'data-table',
    loadChildren: () => import('./pages/layouts/data-table/data-table.module').then( m => m.DataTablePageModule)
  },
  {
    path: 'data-table2',
    loadChildren: () => import('./pages/layouts/data-table2/data-table2.module').then( m => m.DataTable2PageModule)
  },
  {
    path: 'grid-moshe2',
    loadChildren: () => import('./pages/layouts/grid-moshe2/grid-moshe2.module').then( m => m.GridMoshe2PageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./pages/layouts/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'form-novo-usuario',
    loadChildren: () => import('./pages/layouts/form-novo-usuario/form-novo-usuario.module').then( m => m.FormNovoUsuarioPageModule)
  },
  {
    path: 'toggle',
    loadChildren: () => import('./pages/componentes/toggle/toggle.module').then( m => m.TogglePageModule)
  },
  {
    path: 'card-dados-usuario',
    loadChildren: () => import('./pages/layouts/card-dados-usuario/card-dados-usuario.module').then( m => m.CardDadosUsuarioPageModule)
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
