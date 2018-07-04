import { Component, OnInit } from '@angular/core';
import {DataTravelService} from '../data-travel.service';
import {arrayOfData} from '../mockData';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  quantity = 1;
  totalPrice = 0;

  constructor(private cartService: DataTravelService) {
  }

  cartItem = this.cartService.sendAllIdToCart();

  deleteFromArray(id) {
    this.cartService.deleteFromCart(id);
  }

  ngOnInit() {

  }
}
