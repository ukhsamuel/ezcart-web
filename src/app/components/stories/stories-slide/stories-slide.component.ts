import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'stories-slide',
    templateUrl: './stories-slide.component.html',
    styleUrls: ['./stories-slide.component.scss'],
})
export class StoriesSlideComponent implements OnInit {
    responsiveOptions;
    products = [
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ];

    constructor() {
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 12,
                numScroll: 3,
            },
            {
                breakpoint: '768px',
                numVisible: 8,
                numScroll: 3,
            },
            {
                breakpoint: '560px',
                numVisible: 5,
                numScroll: 1,
            },
        ];
    }
    ngOnInit() {}
}
