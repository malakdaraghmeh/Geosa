import { Routes } from '@angular/router';
import { LoginComponent } from '../app/pages/login/login.component';
import { PATHS } from './core/utils/paths';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: PATHS.ROOT,
    redirectTo: PATHS.LOGIN,
    pathMatch: 'full',
  },
  {
    path: PATHS.LOGIN,
    component: LoginComponent,
    data: { breadcrumb: 'Login' },
  },
  {
    path: PATHS.HOME,
    component: HomeComponent,
    data: { breadcrumb: 'Home' },
  },
];
