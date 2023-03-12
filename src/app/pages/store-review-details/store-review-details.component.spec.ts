import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreReviewDetailsComponent } from './store-review-details.component';

describe('StoreReviewDetailsComponent', () => {
  let component: StoreReviewDetailsComponent;
  let fixture: ComponentFixture<StoreReviewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreReviewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoreReviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
