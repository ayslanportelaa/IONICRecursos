import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-google-oauth',
  templateUrl: './google-oauth.page.html',
  styleUrls: ['./google-oauth.page.scss'],
})
export class GoogleOauthPage implements OnInit {

  constructor(private googlePlus: GooglePlus) { }

  ngOnInit() {
  }


  async login() {
    try {
      const res = await this.googlePlus.login({
        'scopes': 'ayslan.marques2014@gmail.com',
        'webClientId': '1026473308376-ve807etgefd8jg190t9kfh0m0dokpbdo.apps.googleusercontent.com'
      });

      //Usuário autenticado com sucesso
      console.log(res);

    } catch (err) {
      //Ocorreu um erro ao autenticar o usuário
      console.error(err);
    }
  }

}
