import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserComponent } from '../user/user.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserComponent
  ],

  
  declarations: [UserComponent],
  exports: [UserComponent],

})

export class UserPageModule {}