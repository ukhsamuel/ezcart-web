import { Component, Input } from '@angular/core';

@Component({
  selector: 'home-ad-card',
  templateUrl: './home-ad-cards.component.html',
  styleUrls: ['./home-ad-cards.component.scss']
})
export class HomeAdCardsComponent {
  @Input() passedData: any = null;

}
