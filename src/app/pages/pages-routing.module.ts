import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from "./home/home.component";
import { CategoryComponent } from "./category/category.component";
import { StoreFrontComponent } from "./store-front/store-front.component";
import { EzSocialsComponent } from './ez-socials/ez-socials.component';
import { StoreReviewDetailsComponent } from './store-review-details/store-review-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { OrdersComponent } from './orders/orders.component';
import { MessagesComponent } from './messages/messages.component';
import { HelpComponent } from './help/help.component';
import { SettingsComponent } from './settings/settings.component';
import { WikiComponent } from './wiki/wiki.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },

  { path: "category", component: CategoryComponent },
  { path: "store-front", component: StoreFrontComponent },
  { path: "ez-socials", component: EzSocialsComponent },
  { path: "review-details", component: StoreReviewDetailsComponent },
  { path: "product-details", component: ProductDetailsComponent },
  { path: "search", component: SearchComponent },
  { path: "orders", component: OrdersComponent },
  { path: "messages", component: MessagesComponent },
  { path: "help", component: HelpComponent },
  { path: "settings", component: SettingsComponent },
  { path: "wiki", component: WikiComponent },
  { path: "", redirectTo: "overview", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
