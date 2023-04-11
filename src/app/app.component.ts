import { Component,ViewChild,ElementRef } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {



  ngOnInit() {
   
  
  }
  
 
  


  public menuComponentesCollection = [
    { title: 'Home',          url: 'home',            icon: 'home'           },
    { title: 'Action-Sheet',  url: 'actionsheet',     icon: 'arrow-up'       },
    { title: 'Accordion',     url: 'accordion',       icon: 'archive'        },
    { title: 'Alert',         url: 'alert',           icon: 'alert'          },
    { title: 'Toggle',        url: 'toggle',          icon: 'toggle'         },
    { title: 'Botão',         url: 'button',          icon: 'dice'           },
    { title: 'Card',          url: 'card',            icon: 'albums'         },
    { title: 'Refresh',       url: 'refresh',         icon: 'refresh-circle' },
    { title: 'DateTime',      url: 'datetime',        icon: 'calendar'       }
    
  ];

  public menuCollectionNativos = [
    { title: 'Bateria',         url: 'bateria',           icon: 'battery-charging' },
    { title: 'Camera',          url: 'camera',            icon: 'camera'           },
    { title: 'Lanterna',        url: 'lanterna',          icon: 'flashlight'       }
    
  ];

  public menuCollectionLayouts = [
    { title: 'Animação Scroll',    url: 'animacao-scroll',         icon: 'albums' },
    { title: 'Charts',             url: 'charts',                  icon: 'albums' },
    { title: 'Modal Dinamico',     url: 'modal-campos-dinamicos',  icon: 'albums' },
    { title: 'Grid Responsivel',   url: 'grids-responsivas',       icon: 'albums' },
    { title: 'Drago-Drop',         url: 'dragdrop',                icon: 'albums' },
    { title: 'Animações CSS',      url: 'animacao3d',              icon: 'albums' },
    { title: 'Flip 3D',            url: 'efeitoflip3d',            icon: 'albums' },
    { title: 'Página Pai',         url: 'pagina-pai',              icon: 'albums' },
    { title: 'DIV Responsivas',    url: 'div-resposivas',          icon: 'albums' },
    { title: 'Card Moshe',         url: 'card-moshe',              icon: 'albums' },
    { title: 'Card Desktop-Mobile',url: 'card-desktop-mobile',     icon: 'albums' },
    { title: 'Grid Moshe',         url: 'grid-moshe-usuarios',     icon: 'albums' },
    { title: 'Grid Moshe 2',       url: 'grid-moshe2',             icon: 'albums' },
    { title: 'Data-Table',         url: 'data-table',              icon: 'calendar' },
    { title: 'Data-Table2',        url: 'data-table2',             icon: 'calendar' },
    { title: 'Modal FormBuilder',  url: 'modal',                   icon: 'alert' },
    { title: 'Form Novo Usuário',  url: 'form-novo-usuario',       icon: 'alert' },
    { title: 'Form Validação'   ,  url: 'form-validators'  ,       icon: 'alert' },
    { title: 'Form Estilizado'   ,  url: 'formulario-estilizado-css' ,   icon: 'alert' },
    { title: 'Dados Usuário',      url: 'card-dados-usuario',      icon: 'person' },
    
  ];
 
  constructor(
    private scroller: ViewportScroller,
    private router: Router
    ) {}
}




