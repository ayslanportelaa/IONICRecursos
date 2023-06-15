import { Component, OnInit } from '@angular/core';
import * as msal from '@azure/msal-browser';
import { PublicClientApplication } from '@azure/msal-browser';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


declare const chrome: any;
@Component({
  selector: 'app-msautenticar',
  templateUrl: './msautenticar.page.html',
  styleUrls: ['./msautenticar.page.scss'],
})
export class MsautenticarPage implements OnInit {

  private readonly msalInstance: PublicClientApplication;
  public urlSafe: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl('');
  public conteudo: any;


  constructor(public sanitizer: DomSanitizer, private screenOrientation: ScreenOrientation) {
    this.msalInstance = new PublicClientApplication({
      auth: {
        clientId: 'af4e0774-f628-47a9-934d-6dd3c9db19b4',
        authority: 'https://login.microsoftonline.com/c7ea54ac-0c3d-4117-bd01-75bd2395c80a',
        redirectUri: 'http://localhost:8100'
      }
    });
  }

  ngOnInit() {
  }


  async login() {
    try {
      const response = await this.msalInstance.loginPopup();
      console.log('Login success:', response);
      // window.location.assign('https://moshe.visualstudio.com/Moshe/_dashboards/dashboard/501c8226-4c3e-41cd-bccd-2100810d8f3d');


      var myFrame = document.getElementById("myFrame");
      myFrame.addEventListener("load", function () {
        // código para manipular o conteúdo do iframe aqui
      });







      //this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:3000/scrum');
    } catch (error) {
      console.log('Login error:', error);
    }
  }


  abrirTelaCheia(url) {
    var params = 'width=' + screen.width;
    params += ', height=' + screen.height;
    params += ', top=0, left=0'
    params += ', fullscreen=yes';
    params += ', directories=no';
    params += ', location=no';
    params += ', menubar=no';
    params += ', resizable=no';
    params += ', scrollbars=no';
    params += ', status=no';
    params += ', toolbar=no';


    var newwin = window.open(url, 'FullWindowAll', params);
    if (window.focus) { newwin.focus() }
    return false;
  }
}


