import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { GlobalServiceService } from 'src/app/services/global-service.service';




@Component({
  selector: 'app-card-dados-usuario',
  templateUrl: './card-dados-usuario.page.html',
  styleUrls: ['./card-dados-usuario.page.scss'],
})
export class CardDadosUsuarioPage implements OnInit {

  // valorParaEnviar = {
  //   name: 'Micael Pereira',
  //  };

  loginUsuarioParam: string = '1323';
  public teste: String = '';

  url: string = 'https://www.pousadaportela.com.br'
  public ArquivosBase64: any;

  constructor(
    public navCtrl: NavController,
    private router: Router,
    public global: GlobalServiceService,
    //public base64: Base64
  ) { }



  ngOnInit() {



  }



  uupload_img_perfil() {

    document.getElementById('upload_img_perfil').click();

  }


geraBase64(event) {

    var imgBruto = event.target.files;
    var imgArrayUnico = imgBruto[0];

    var validou = false;
    var extensaoImagem = imgArrayUnico.type;
    var extensaoImagem3letras = extensaoImagem.replace("image/", "")

    // VALIDAÇÃO DA EXTENSÃO DO ARQUIVO, SÓ PERMITIR IMAGEM PNG JPG BMP JPEG
    if ((extensaoImagem == "image/png") || (extensaoImagem == "image/jpg") || (extensaoImagem == "image/bmp") || (extensaoImagem == "image/jpeg")) {

      validou = true;

      console.log(extensaoImagem);
    } else {

      validou = false;
      console.log("Não validou");
      return ('');
    }

    // PASSOU DAS VALIDAÇÕES PRONTO PARA RETORNAR A BASE64
    var reader = new FileReader();

    if (imgArrayUnico) {
      reader.readAsDataURL(imgArrayUnico);

    }
    reader.onloadend = () => {
      this.ArquivosBase64 = reader.result;
      this.ArquivosBase64 = this.ArquivosBase64.replace("data:image/" + extensaoImagem3letras + ";base64,", '');
      this.fotoUsuarioGetUrl(this.ArquivosBase64);
    };

  }


  fotoUsuarioGetUrl(arquivoBase64:any){

  console.log('chegouoooooo',arquivoBase64);
  }





}




