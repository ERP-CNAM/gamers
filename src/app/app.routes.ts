import { Routes } from '@angular/router';
import { Loginpage } from './loginpage/loginpage';
import { Homepage } from './homepage/homepage';
import { restrictConnectedUser, restrictNotConnectedUser } from './auth-guard';
import { Contactuspage } from './contactuspage/contactuspage';
import { NotFoundpage } from './not-foundpage/not-foundpage';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'login', component: Loginpage },
  { path: 'contact-us', component: Contactuspage, canActivate: [restrictNotConnectedUser] },

  { path: '**', component: NotFoundpage },
];
