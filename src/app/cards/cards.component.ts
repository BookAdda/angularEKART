import { Component, OnInit } from '@angular/core';
import {arrayOfData} from '../mockData';
import {arrayOfData1} from '../mockData';
import {arrayOfData2} from '../mockData';
import {arrayOfData3} from '../mockData';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})



export class CardsComponent implements OnInit {
  electronicsData = arrayOfData.slice( 0, 4 ) ;
  fashionData = arrayOfData1.slice( 0, 4 ) ;
  watchesData = arrayOfData2.slice( 0, 4 ) ;
  booksData = arrayOfData3.slice( 0, 4 ) ;

  constructor() {

  }


  ngOnInit() {}
}

