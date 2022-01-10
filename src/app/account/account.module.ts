import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material.module';




@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AccountRoutingModule,
    MaterialModule
  ],
  exports:[
    RegistrationComponent,
    LoginComponent,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccountModule { }
