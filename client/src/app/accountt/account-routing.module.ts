import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResgisterComponent } from './resgister/resgister.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: ResgisterComponent}
];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
