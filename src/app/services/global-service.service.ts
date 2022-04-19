import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor() { }


  retornaMsg(){

    return('oi');
  }

  enviarURL(url){

    return(url);

  }
}
