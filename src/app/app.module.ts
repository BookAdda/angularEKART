import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from './/app-routing.module';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { CartComponent } from './cart/cart.component';
import {DataTravelService} from './data-travel.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    LayoutComponent,
    ViewAllProductsComponent,
    CartComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [DataTravelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
