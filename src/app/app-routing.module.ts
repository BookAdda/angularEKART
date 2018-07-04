import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ViewAllProductsComponent} from './view-all-products/view-all-products.component';
import {CardsComponent} from './cards/cards.component';
import {CartComponent} from './cart/cart.component' ;
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '' , redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: CardsComponent },
  { path: 'cart' , component: CartComponent },
  { path: 'electronics', component: ViewAllProductsComponent },
  { path: 'fashion', component: ViewAllProductsComponent },
  { path: 'watches', component: ViewAllProductsComponent },
  { path: 'books', component: ViewAllProductsComponent },
  {path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
