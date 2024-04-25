import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneRatingComponent } from './phone-rating.component';

describe('PhoneRatingComponent', () => {
  let component: PhoneRatingComponent;
  let fixture: ComponentFixture<PhoneRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneRatingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
