import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { StoreFrontComponent } from "./pages/store-front/store-front.component";
import { StoreReviewsComponent } from "./pages/store-reviews/store-reviews.component";
import { StoreItemComponent } from "./pages/store-item/store-item.component";
// import { StoreFrontComponent } from './pages/store-front/store-front.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [
                    { path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
                    // { path: 'category', loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule) },
                    // { path: 'store-front', loadChildren: () => import('./pages/store-front/store-front.module').then(m => m.StoreFrontModule) },
                    // { path: "store-front", component: StoreFrontComponent },
                    // { path: "store-reviews", component: StoreReviewsComponent },
                    // { path: "store-item", component: StoreItemComponent },

                    { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                    // { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                    // { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                    // { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                    // { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
                ]
            },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
