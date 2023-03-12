import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { json } from 'body-parser';

@Component({
  selector: 'app-store-front',
  templateUrl: './store-front.component.html',
  styleUrls: ['./store-front.component.scss']
})
export class StoreFrontComponent {
  display: boolean = true;
  rating = 4;
  store: any;


  _products = [
    {
        title:'Bib and Bowl Set',
        location: 'Ikoyi, Lagos',
        ratings: '4.9',
        total: '2.3k',
        price: '20,000',
        photo:'assets/imgs/bowl.png'
    },
    {
        title:'Art Classes for Kids',
        location: 'Yaba, Lagos',
        ratings: '4.5',
        total: '1.9k',
        price: '35,000',
        photo:'assets/imgs/painter.jpg'
    },
    {
        title:'Fruit Blender',
        location: 'Ikeja, Lagos',
        ratings: '4.2',
        total: '2.8k',
        price: '15,000',
        photo:'assets/imgs/blend.jpg'
    },
    {
        title:'Bib and Bowl Set',
        location: 'Ikoyi, Lagos',
        ratings: '4.9',
        total: '2.3k',
        price: '20,000',
        photo:'assets/imgs/bowl.png'
    },
    {
        title:'Art Classes for Kids',
        location: 'Yaba, Lagos',
        ratings: '4.5',
        total: '1.9k',
        price: '35,000',
        photo:'assets/imgs/painter.jpg'
    },
    {
        title:'Fruit Blender',
        location: 'Ikeja, Lagos',
        ratings: '4.2',
        total: '2.8k',
        price: '15,000',
        photo:'assets/imgs/blend.jpg'
    }
]

  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
     
      let p = this.activatedRoute.snapshot.queryParams['q'];
      this.store = JSON.parse(p)
      console.log('store', (this.store));
      
     }


}
