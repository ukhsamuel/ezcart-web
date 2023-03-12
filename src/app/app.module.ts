import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { FeaturedAvatarComponent } from './components/stories/featured-avatar/featured-avatar.component';
import { GalleryModule } from 'ng-gallery';
// import { StoreFrontComponent } from './pages/store-front/store-front.component';
// import { StoreReviewsComponent } from './pages/store-reviews/store-reviews.component';
// import { PagesModule } from './pages/pages.module';
import { StarRatingModule } from 'angular-star-rating';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { DialogModule } from 'primeng/dialog';


@NgModule({
    declarations: [
        AppComponent, NotfoundComponent, FeaturedAvatarComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        GalleryModule,
        StarRatingModule.forRoot(),
		MessagesModule,
		MessageModule,
        DialogModule
    ],
    exports:[
        FeaturedAvatarComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
