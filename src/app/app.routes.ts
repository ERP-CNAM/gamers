import { Routes } from '@angular/router';
import { Loginpage } from './loginpage/loginpage';
import { Homepage } from './homepage/homepage';
import { DetailPage } from './pages/detail/detail';
import { Subscribepage } from './subscribepage/subscribepage';
import { Profilepage } from './profilepage/profilepage';
import {
  restrictConnectedUser,
  restrictNotConnectedUser,
  restrictNotSubscribedUser,
} from './auth-guard';
import { Contactuspage } from './contactuspage/contactuspage';
import { NotFoundpage } from './not-foundpage/not-foundpage';
import { Registerpage } from './registerpage/registerpage';
import { Cataloguepage } from './cataloguepage/cataloguepage';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'login', component: Loginpage, canActivate: [restrictConnectedUser] },
  { path: 'detail/:id', component: DetailPage, canActivate: [restrictNotSubscribedUser] },
  { path: 'subscribe', component: Subscribepage, canActivate: [restrictNotConnectedUser] },
  { path: 'profil', component: Profilepage, canActivate: [restrictNotConnectedUser] },
  { path: 'register', component: Registerpage, canActivate: [restrictConnectedUser] },
  { path: 'contact-us', component: Contactuspage },
  { path: 'catalogue', component: Cataloguepage },

  { path: '**', component: NotFoundpage },
];
