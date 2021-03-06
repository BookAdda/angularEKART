import { Component, OnInit } from '@angular/core';

import {DataTravelService} from '../data-travel.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  viewSingleItemObj = {};
viewAllProductArray = [];
  dataForCart: {};
  p = 1;
  totalItem: number;
  constructor( private myProductService: DataTravelService , private route: ActivatedRoute) {}

  getData(p) {
    console.log(this.route.snapshot.url[0].path);

    if ( this.route.snapshot.url[0].path === 'electronics') {
      // request to server
      this.myProductService.getDataFromServerElectronics(p).subscribe((data) => {
        // console.log(data);
        this.viewAllProductArray = Object.keys(data).map(function (key) { return data[key]; });
        console.log(this.viewAllProductArray[this.viewAllProductArray.length - 1]);
        this.totalItem = this.viewAllProductArray[this.viewAllProductArray.length - 1].totalItem;
        this.viewAllProductArray = this.viewAllProductArray.slice(0, this.viewAllProductArray.length - 1);
        console.log(this.viewAllProductArray);
      }) ;

    }
    if ( this.route.snapshot.url[0].path === 'fashion') {
      this.myProductService.getDataFromServerFashion(p).subscribe((data) => {
        console.log(data);
        this.viewAllProductArray = Object.keys(data).map(function (key) { return data[key]; });
        console.log(this.viewAllProductArray[this.viewAllProductArray.length - 1]);
        this.totalItem = this.viewAllProductArray[this.viewAllProductArray.length - 1].totalItem;
        this.viewAllProductArray = this.viewAllProductArray.slice(0, this.viewAllProductArray.length - 1);
        console.log(this.viewAllProductArray);
      });
    }
    if ( this.route.snapshot.url[0].path === 'watches') {
      this.myProductService.getDataFromServerWatches(p).subscribe((data) => {
        console.log(data);
        this.viewAllProductArray = Object.keys(data).map(function (key) { return data[key]; });
        console.log(this.viewAllProductArray[this.viewAllProductArray.length - 1]);
        this.totalItem = this.viewAllProductArray[this.viewAllProductArray.length - 1].totalItem;
        this.viewAllProductArray = this.viewAllProductArray.slice(0, this.viewAllProductArray.length - 1);
        console.log(this.viewAllProductArray);
      });
    }
    if ( this.route.snapshot.url[0].path === 'books') {
      this.myProductService.getDataFromServerBooks(p).subscribe((data) => {
        console.log(data);
        this.viewAllProductArray = Object.keys(data).map(function (key) { return data[key]; });
        console.log(this.viewAllProductArray[this.viewAllProductArray.length - 1]);
        this.totalItem = this.viewAllProductArray[this.viewAllProductArray.length - 1].totalItem;
        this.viewAllProductArray = this.viewAllProductArray.slice(0, this.viewAllProductArray.length - 1);
        console.log(this.viewAllProductArray);
      });
    }
  }
  pageChanged($event) {
    this.p = $event;
console.log('page number:' , this.p);
this.getData(this.p);
  }
btnClicked(id) {
  for ( let i = 0; i < this.viewAllProductArray.length; i++) {
    if (id === this.viewAllProductArray[i]._id) {
      this.dataForCart = this.viewAllProductArray[i];
    }
  }

  if ( this.dataForCart.hasOwnProperty('quantity')) {
    console.log('property is already set , going to service')
    this.myProductService.addToCart(this.dataForCart);

  } else {
    this.dataForCart['quantity'] = 1;
    console.log('setting property' , this.dataForCart);

    this.myProductService.addToCart(this.dataForCart);
  }

}
  ngOnInit() {
    this.getData(this.p);
  }

}
