import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SinglePageProductComponent } from './single-page-product/single-page-product.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: CardComponent },
  { path: 'single-page/:id', component: SinglePageProductComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: SignupFormComponent },
  { path: '**', component: NotFoundPageComponent },
];
