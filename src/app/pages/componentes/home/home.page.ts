import { Component, OnInit,ViewChild } from '@angular/core';
import { Directive, ElementRef } from '@angular/core';
import { Platform, NavController,IonContent } from '@ionic/angular';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonContent, { static: false }) content: IonContent;

  constructor(private _el: ElementRef) { }

  ngOnInit() {

    
  }

  ngAfterViewChecked() {
    
    this.content.scrollToPoint(400,400);
  }

 
}
