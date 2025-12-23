import { Routes } from '@angular/router';
import { Loginpage } from './loginpage/loginpage';
import { Homepage } from './homepage/homepage';
import { restrictConnectedUser, restrictNotConnectedUser } from './auth-guard';
import { Contactuspage } from './contactuspage/contactuspage';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'login', component: Loginpage },
  { path: 'contact-us', component: Contactuspage, canActivate: [restrictNotConnectedUser] },

  { path: '**', component: NotFound },
];
