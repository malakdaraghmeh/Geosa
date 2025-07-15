import { Routes } from '@angular/router';
import { PATHS } from './core/utils/paths';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: PATHS.LOGIN, pathMatch: 'full' },
      { path: PATHS.LOGIN, component: LoginComponent },
      { path: PATHS.REGISTER, component: RegisterComponent },
      { path: PATHS.FORGOT_PASSWORD, component: ForgotPasswordComponent },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: PATHS.HOME,
        component: HomeComponent,
        data: { breadcrumb: 'Home' },
      },
    ],
  },

  { path: PATHS.NOT_FOUND, component: NotFoundPageComponent },

];
