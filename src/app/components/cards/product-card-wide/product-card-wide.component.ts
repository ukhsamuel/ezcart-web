import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-card-wide',
  templateUrl: './product-card-wide.component.html',
  styleUrls: ['./product-card-wide.component.scss']
})
export class ProductCardWideComponent {

  @Input() passedData: any = null;
}
