import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBarsComponent } from './rating-bars.component';

describe('RatingBarsComponent', () => {
  let component: RatingBarsComponent;
  let fixture: ComponentFixture<RatingBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingBarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
