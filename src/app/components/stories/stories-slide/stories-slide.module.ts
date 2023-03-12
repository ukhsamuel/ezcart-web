import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { StoriesSlideComponent } from './stories-slide.component';
import {CarouselModule} from 'primeng/carousel';



@NgModule({
  declarations: [
    // StoriesSlideComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class StoriesSlideModule { }
