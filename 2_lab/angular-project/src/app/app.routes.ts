import { Routes } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

export const routes: Routes = [// корень → About Us
  { path: 'about', component: AboutUsComponent },
  {path: 'login', component: LoginComponent}

];
