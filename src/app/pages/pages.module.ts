import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HomeComponent } from "./home/home.component";
import { CategoryComponent } from "./category/category.component";
import { StoreFrontComponent } from "./store-front/store-front.component";
import { PageTitleComponent } from '../components/headers/page-title/page-title.component';
import { ProductCardWideComponent } from "../components/cards/product-card-wide/product-card-wide.component";
import { DialogModule } from 'primeng/dialog';
import {ProgressBarModule} from 'primeng/progressbar';


import {CarouselModule} from 'primeng/carousel';
import { HomeAdCardsComponent } from "../components/ads/home-ad-cards/home-ad-cards.component";
import { BgBannerComponent } from "../components/ads/bg-banner/bg-banner.component";
import { PostComponent } from "../components/cards/post/post.component";
import { StoreCardComponent } from "../components/cards/store-card/store-card.component";
import { ProductCardComponent } from "../components/cards/product-card/product-card.component";
import { FeaturedStoriesComponent } from '../components/stories/featured-stories/featured-stories.component';
import { PageDividerComponent } from '../components/headers/page-divider/page-divider.component';
import { StoriesSlideComponent } from '../components/stories/stories-slide/stories-slide.component';
import { NgxMaterialRatingModule } from 'ngx-material-rating';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { RatingBarsComponent } from "../components/cards/rating-bars/rating-bars.component";
import { UserReviewComponent } from "../components/cards/user-review/user-review.component";
import { EzSocialsComponent } from './ez-socials/ez-socials.component';
import { SocialPostComponent } from '../components/cards/social-post/social-post.component';
import { StoreReviewDetailsComponent } from './store-review-details/store-review-details.component';
import { PrimaryButtonComponent } from "../components/buttons/primary-button/primary-button.component";
import { TextAreaComponent } from '../components/inputs/text-area/text-area.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { OrdersComponent } from './orders/orders.component';
import { MessagesComponent } from './messages/messages.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './settings/settings.component';
import { WikiComponent } from './wiki/wiki.component';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    StoreFrontComponent,
    PageTitleComponent,
    ProductCardWideComponent,
    HomeAdCardsComponent,
    PostComponent,
    FeaturedStoriesComponent,
    StoreCardComponent,
    ProductCardComponent,
    BgBannerComponent,
    StoriesSlideComponent,
    PageDividerComponent,
    RatingBarsComponent,
    UserReviewComponent,
    EzSocialsComponent,
    SocialPostComponent,
    StoreReviewDetailsComponent,
    PrimaryButtonComponent,
    TextAreaComponent,
    ProductDetailsComponent,
    SearchComponent,
    OrdersComponent,
    MessagesComponent,
    HelpComponent,
    SettingsComponent,
    WikiComponent
  ],
  imports: [
    CommonModule,
		MessagesModule,
		MessageModule,
    PagesRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    CarouselModule,
    NgxMaterialRatingModule,
		ToastModule,
    ProgressBarModule,
    NgxStarRatingModule,
  ]
})
export class PagesModule { }
