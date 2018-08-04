import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ViewAllProductsComponent} from './view-all-products/view-all-products.component';
import {CardsComponent} from './cards/cards.component';
import {CartComponent} from './cart/cart.component' ;
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AdminComponent} from './admin/admin.component';
import {ViewSingleItemComponent} from './view-single-item/view-single-item.component';

const routes: Routes = [
  { path: '' , redirectTo: 'git diff', pathMatch: 'full'  },
  { path: 'home', component: CardsComponent },
  { path: 'cart' , component: CartComponent },
  {path: 'admin', component: AdminComponent},
  { path: 'electronics', component: ViewAllProductsComponent },
  { path: 'fashion', component: ViewAllProductsComponent },
  { path: 'watches', component: ViewAllProductsComponent },
  { path: 'electronics/:id', component: ViewSingleItemComponent },
  { path: 'fashion/:id', component: ViewSingleItemComponent },
  { path: 'books/:id', component: ViewSingleItemComponent },
  { path: 'watches/:id', component:  ViewSingleItemComponent },
  { path: 'books', component: ViewAllProductsComponent },
  {path: 'user',    loadChildren: '../app/user/user.module#UserModule'},
  {path: '**' , component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule { }
