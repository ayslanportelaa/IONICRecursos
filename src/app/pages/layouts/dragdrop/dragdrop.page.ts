import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-dragdrop',
  templateUrl: './dragdrop.page.html',
  styleUrls: ['./dragdrop.page.scss'],
})
export class DragdropPage implements OnInit {

  public createOptions:any;
  

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      alert("Hello from New to design")
    });

    
  }

 

}
