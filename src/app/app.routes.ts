import { Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { SinglePageProductComponent } from './single-page-product/single-page-product.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'product', component: CardComponent },
  { path: 'single-page/:id', component: SinglePageProductComponent },
  { path: '**', component: NotFoundPageComponent },
];
