import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedAvatarComponent } from './featured-avatar.component';

describe('FeaturedAvatarComponent', () => {
  let component: FeaturedAvatarComponent;
  let fixture: ComponentFixture<FeaturedAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedAvatarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
