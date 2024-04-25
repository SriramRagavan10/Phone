import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePriceUpdateComponent } from './phone-price-update.component';

describe('PhonePriceUpdateComponent', () => {
  let component: PhonePriceUpdateComponent;
  let fixture: ComponentFixture<PhonePriceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhonePriceUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhonePriceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
