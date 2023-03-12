import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdCardsComponent } from './home-ad-cards.component';

describe('HomeAdCardsComponent', () => {
  let component: HomeAdCardsComponent;
  let fixture: ComponentFixture<HomeAdCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAdCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAdCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
