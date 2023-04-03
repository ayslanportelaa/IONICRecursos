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
  {
    path: 'card-desktop-mobile',
    loadChildren: () => import('./pages/layouts/card-desktop-mobile/card-desktop-mobile.module').then( m => m.CardDesktopMobilePageModule)
  },
  {
    path: 'form-validators',
    loadChildren: () => import('./pages/layouts/form-validators/form-validators.module').then( m => m.FormValidatorsPageModule)
  },
  {
    path: 'formulario-estilizado-css',
    loadChildren: () => import('./pages/layouts/formulario-estilizado-css/formulario-estilizado-css.module').then( m => m.FormularioEstilizadoCssPageModule)
  },
  {
    path: 'div-resposivas',
    loadChildren: () => import('./pages/layouts/div-resposivas/div-resposivas.module').then( m => m.DivResposivasPageModule)
  },
  
  {
    path: 'pagina-pai',
    loadChildren: () => import('./pages/layouts/pagina-pai/pagina-pai.module').then( m => m.PaginaPaiPageModule)
  },
  {
    path: 'efeitoflip3d',
    loadChildren: () => import('./pages/layouts/efeitoflip3d/efeitoflip3d.module').then( m => m.Efeitoflip3dPageModule)
  },
  {
    path: 'animacao3d',
    loadChildren: () => import('./pages/layouts/animacao3d/animacao3d.module').then( m => m.Animacao3dPageModule)
  },
  {
    path: 'dragdrop',
    loadChildren: () => import('./pages/layouts/dragdrop/dragdrop.module').then( m => m.DragdropPageModule)
  },
  {
    path: 'grids-responsivas',
    loadChildren: () => import('./pages/layouts/grids-responsivas/grids-responsivas.module').then( m => m.GridsResponsivasPageModule)
  },
  {
    path: 'modal-campos-dinamicos',
    loadChildren: () => import('./pages/layouts/modal-campos-dinamicos/modal-campos-dinamicos.module').then( m => m.ModalCamposDinamicosPageModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./pages/layouts/charts/charts.module').then( m => m.ChartsPageModule)
  },
 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
