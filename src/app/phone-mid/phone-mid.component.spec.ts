import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneMidComponent } from './phone-mid.component';

describe('PhoneMidComponent', () => {
  let component: PhoneMidComponent;
  let fixture: ComponentFixture<PhoneMidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneMidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneMidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
