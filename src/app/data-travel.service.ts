import { Injectable } from '@angular/core';
import {allData} from './mockData';

@Injectable({
  providedIn: 'root'
})
export class DataTravelService {

  dataGlobal = allData ;
  cartItem = [] ;
  constructor() { }

 addToCart(id) {
alert('added to cart')
    for ( let i = 0; i < allData.length; i++ ) {
      if ( allData[i].id === id ) {
        this.cartItem.push(allData[i]);
        break;

      }
    }
   console.log(this.cartItem);
  }
  deleteFromCart(id) {
    for ( let i = 0; i < this.cartItem.length; i++ ) {
      if ( this.cartItem[i].id === id ) {
        this.cartItem.splice(i, 1 ) ;

      }
    }
    console.log(this.cartItem);

  }
  sendAllIdToCart() {
    return this.cartItem;
  }

}
