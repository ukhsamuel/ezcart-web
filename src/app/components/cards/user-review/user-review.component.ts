import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss']
})
export class UserReviewComponent {

  @Input() passedData: any = null;
}
