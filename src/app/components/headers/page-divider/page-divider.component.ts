import { Component, Input } from '@angular/core';

@Component({
  selector: 'page-divider',
  templateUrl: './page-divider.component.html',
  styleUrls: ['./page-divider.component.scss']
})
export class PageDividerComponent {

  @Input()
  title: string = '';
}
