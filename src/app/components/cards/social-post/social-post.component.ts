import { Component, Input } from '@angular/core';

@Component({
  selector: 'social-post',
  templateUrl: './social-post.component.html',
  styleUrls: ['./social-post.component.scss']
})
export class SocialPostComponent {

  @Input() passedData: any = null;
}
