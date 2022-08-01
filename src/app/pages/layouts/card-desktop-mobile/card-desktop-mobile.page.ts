import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-desktop-mobile',
  templateUrl: './card-desktop-mobile.page.html',
  styleUrls: ['./card-desktop-mobile.page.scss'],
})
export class CardDesktopMobilePage implements OnInit {

  data: any;

  constructor() { 

    setTimeout(() => {
      this.data = true;
    }, 3000);
    
  }

  ngOnInit() {
  }

}
