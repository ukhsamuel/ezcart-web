import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
// import { HomeComponent } from './home.component';

import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';
// import { PanelMenuModule } from 'primeng/panelmenu';
// import {CarouselModule} from 'primeng/carousel';
// import { HomeAdCardsComponent } from "../../components/ads/home-ad-cards/home-ad-cards.component";
// import { BgBannerComponent } from "../../components/ads/bg-banner/bg-banner.component";
// import { PostComponent } from "../../components/cards/post/post.component";
// import { StoreCardComponent } from "../../components/cards/store-card/store-card.component";
// import { ProductCardComponent } from "../../components/cards/product-card/product-card.component";
// import { FeaturedStoriesComponent } from '../../components/stories/featured-stories/featured-stories.component';
// import { PageDividerComponent } from '../../components/headers/page-divider/page-divider.component';
// import { StoriesSlideComponent } from '../../components/stories/stories-slide/stories-slide.component';
// import { ComponentsModule } from "../../components/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartModule,
    MenuModule,
    TableModule,
    StyleClassModule,
    ButtonModule,
    HomeRoutingModule
  ],
  declarations: [
    // HomeComponent
  ]
})
export class HomeModule { }
