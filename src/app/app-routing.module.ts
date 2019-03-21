import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {
  path: 'admin',
  component: AdminComponent
  },
  {
  path: 'home',
  component: HomeComponent
  },
  {
    path: 'auth/login',
    component : LoginComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
