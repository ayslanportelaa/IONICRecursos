import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage implements OnInit {
    public levels:any;
    public mytoggle;
  constructor() { }

  ngOnInit() {
  }

 


  apertar(e){

    console.log(e.detail.checked);
  }
}


