import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    OnDestroy,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../demo/api/product';
import { ProductService } from '../../demo/service/product.service';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;

    imageData = data;
    responsiveOptions;
    bgSlideresponsiveOptions: any;
    posts = [
        {
            title:'Benefits of Arts and Crafts',
            description: 'Crafts are a great way for kids to express their creativity, develop thier skills',
            photo:'assets/imgs/workout.jpg'
        },
        {
            title:'FREE Mommy and Maternal Care',
            description: 'We are offering free baby yoga classes tuesday from 8AM -  9AM.',
            photo:'assets/imgs/womanbaby.jpg'
        },
        {
            title:'Benefits of Daily Exercise',
            description: 'Regulars exercise has the ability to massively improve your quality of life',
            photo:'assets/imgs/lady2.jpg'
        },
        {
            title:'Two things to do in May',
            description: 'We are offering free baby yoga classes tuesday from 8AM -  9AM.',
            photo:'assets/imgs/guy.jpg'
        }
    ]

    stores = [
        {
            title:'The Cuddle Club',
            location: 'Ikoyi, Lagos',
            ratings: '4.7',
            total: '900',
            photo:'assets/imgs/store1.jpg'
        },
        {
            title:'Zen Yoga Studio',
            location: 'Yaba, Lagos',
            ratings: '4.8',
            total: '1875',
            photo:'assets/imgs/store2.jpg'
        },
        {
            title:'Little Picassos Nigeria',
            location: 'Yaba, Lagos',
            ratings: '4.8',
            total: '1875',
            photo:'assets/imgs/store3.jpg'
        },
        {
            title:'Zen Yoga Studio',
            location: 'Yaba, Lagos',
            ratings: '4.8',
            total: '1875',
            photo:'assets/imgs/store4.jpg'
        },
        {
            title:'The Cuddle Club',
            location: 'Ikoyi, Lagos',
            ratings: '4.7',
            total: '900',
            photo:'assets/imgs/store5.jpg'
        }
    ]

    _products = [
        {
            title:'Bib and Bowl Set',
            location: 'Ikoyi, Lagos',
            ratings: '4.9',
            total: '2.3k',
            price: '20,000',
            photo:'assets/imgs/bowl.png'
        },
        {
            title:'Art Classes for Kids',
            location: 'Yaba, Lagos',
            ratings: '4.5',
            total: '1.9k',
            price: '35,000',
            photo:'assets/imgs/painter.jpg'
        },
        {
            title:'Fruit Blender',
            location: 'Ikeja, Lagos',
            ratings: '4.2',
            total: '2.8k',
            price: '15,000',
            photo:'assets/imgs/blend.jpg'
        },
        {
            title:'Bib and Bowl Set',
            location: 'Ikoyi, Lagos',
            ratings: '4.9',
            total: '2.3k',
            price: '20,000',
            photo:'assets/imgs/bowl.png'
        },
        {
            title:'Art Classes for Kids',
            location: 'Yaba, Lagos',
            ratings: '4.5',
            total: '1.9k',
            price: '35,000',
            photo:'assets/imgs/painter.jpg'
        },
        {
            title:'Fruit Blender',
            location: 'Ikeja, Lagos',
            ratings: '4.2',
            total: '2.8k',
            price: '15,000',
            photo:'assets/imgs/blend.jpg'
        }
    ]



    constructor(
        private productService: ProductService,
        public layoutService: LayoutService
    ) {
        this.subscription = this.layoutService.configUpdate$.subscribe(() => {
            this.initChart();
        });

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3,
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2,
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1,
            },
        ];

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 1,
            },
            {
                breakpoint: '768px',
                numVisible: 3,
                numScroll: 1,
            },
            {
                breakpoint: '560px',
                numVisible: 2,
                numScroll: 1,
            },
        ];
    }

    ngOnInit() {
        this.initChart();
        // this.productService.getProductsSmall().then(data => this.products = data);

        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue(
            '--text-color-secondary'
        );
        const surfaceBorder =
            documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
            ],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor:
                        documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor:
                        documentStyle.getPropertyValue('--bluegray-700'),
                    tension: 0.4,
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor:
                        documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: 0.4,
                },
            ],
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false,
                    },
                },
            },
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
const data = [
    {
        srcUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
        previewUrl: 'https://preview.ibb.co/jrsA6R/img12.jpg',
    },
    {
        srcUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
        previewUrl: 'https://preview.ibb.co/kPE1D6/clouds.jpg',
    },
    {
        srcUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
        previewUrl: 'https://preview.ibb.co/mwsA6R/img7.jpg',
    },
    {
        srcUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
        previewUrl: 'https://preview.ibb.co/kZGsLm/img8.jpg',
    },
];
