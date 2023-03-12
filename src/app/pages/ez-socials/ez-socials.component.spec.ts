import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EzSocialsComponent } from './ez-socials.component';

describe('EzSocialsComponent', () => {
  let component: EzSocialsComponent;
  let fixture: ComponentFixture<EzSocialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EzSocialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EzSocialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
