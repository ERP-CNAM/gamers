import { Routes } from '@angular/router';
import { Loginpage } from './loginpage/loginpage';
import { Homepage } from './homepage/homepage';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'login', component: Loginpage },
];
