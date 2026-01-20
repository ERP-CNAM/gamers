import { Routes } from '@angular/router';
import { Loginpage } from './loginpage/loginpage';
import { Homepage } from './homepage/homepage';
import { DetailPage } from './pages/detail/detail';
import { Subscribepage } from './subscribepage/subscribepage';
import { Profilepage } from './profilepage/profilepage';
import { restrictConnectedUser, restrictNotConnectedUser } from './auth-guard';
import { Contactuspage } from './contactuspage/contactuspage';
import { NotFoundpage } from './not-foundpage/not-foundpage';
import { Registerpage } from './registerpage/registerpage';
import { DiscoverPage } from './discover/discover';


export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'login', component: Loginpage },
  { path: 'detail/:id', component: DetailPage },
  { path: 'subscribe', component: Subscribepage },
  { path: 'profil', component: Profilepage },
  { path: 'register', component: Registerpage },
  { path: 'contact-us', component: Contactuspage, canActivate: [restrictNotConnectedUser] },
  { path: 'discover', component: DiscoverPage },

  { path: '**', component: NotFoundpage },
];
