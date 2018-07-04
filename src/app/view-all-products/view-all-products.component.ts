import { Component, OnInit } from '@angular/core';
import {arrayOfData} from '../mockData';
import {arrayOfData1} from '../mockData';
import {arrayOfData2} from '../mockData';
import {arrayOfData3} from '../mockData';

import {DataTravelService} from '../data-travel.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {

viewAllProductArray = arrayOfData;

  constructor( private myProductService: DataTravelService , private route: ActivatedRoute) {
    console.log(this.route.snapshot.url[0].path);

    if ( this.route.snapshot.url[0].path === 'electronics') {
      this.viewAllProductArray = arrayOfData;

    }
      if ( this.route.snapshot.url[0].path === 'fashion') {
        this.viewAllProductArray = arrayOfData1;

      }
        if ( this.route.snapshot.url[0].path === 'watches') {
          this.viewAllProductArray = arrayOfData2;

        }
          if ( this.route.snapshot.url[0].path === 'books') {
            this.viewAllProductArray = arrayOfData3;

          }

  }

btnClicked(id) {
  this.myProductService.addToCart(id);
}
  ngOnInit() {
  }

}
