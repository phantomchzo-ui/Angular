import { Routes } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {AppComponent} from './app.component';

export const routes: Routes = [// корень → About Us
  { path: 'about', component: AboutUsComponent } // optional, чтобы /about тоже работал
];
