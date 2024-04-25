import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePriceComponent } from './phone-price.component';

describe('PhonePriceComponent', () => {
  let component: PhonePriceComponent;
  let fixture: ComponentFixture<PhonePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonePriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
