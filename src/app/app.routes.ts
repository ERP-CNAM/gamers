import { Routes } from '@angular/router';
import { Loginpage } from './loginpage/loginpage';
import { Homepage } from './homepage/homepage';
import { DetailPage } from './pages/detail/detail';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'login', component: Loginpage },
  { path: 'detail/:id', component: DetailPage },
];
