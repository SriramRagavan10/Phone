import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneBrandComponent } from './phone-brand.component';

describe('PhoneBrandComponent', () => {
  let component: PhoneBrandComponent;
  let fixture: ComponentFixture<PhoneBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneBrandComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
