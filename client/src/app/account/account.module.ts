// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { AccountRoutingModule } from './account-routing.module';
// import { SharedModule } from '../shared/shared.module';



// @NgModule({
//   declarations: [
//     LoginComponent,
//     RegisterComponent
//   ],
//   imports: [
//     CommonModule,
//     AccountRoutingModule,
//     SharedModule
//   ]
// })
// export class AccountModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    LoginComponent,
    // RegisterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
    //AccountRoutingModule
  ],
})
export class AccountModule { }
