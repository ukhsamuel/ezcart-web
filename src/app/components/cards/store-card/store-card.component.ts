import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.scss']
})
export class StoreCardComponent {

  @Input() passedData: any = null;


    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    
  }

  

  gotoPage(data: any) {
    let q = JSON.stringify(data);
    this.router.navigate(['/store-front'], { queryParams: { q }});
  }
}
