import { Component, OnInit } from '@angular/core';
import { Validators,FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-validators',
  templateUrl: './form-validators.page.html',
  styleUrls: ['./form-validators.page.scss'],
})
export class FormValidatorsPage implements OnInit {

  RegisterForm:FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) { }


  enviar(){

    console.log("Valor do campor é :",)
  }

  ngOnInit() {

    this.RegisterForm = this.formBuilder.group({

      nome:new FormControl('',[
        Validators.required,
        Validators.minLength(4)
      ])

    });

  }

}
