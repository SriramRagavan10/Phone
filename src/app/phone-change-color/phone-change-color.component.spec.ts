import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneChangeColorComponent } from './phone-change-color.component';

describe('PhoneChangeColorComponent', () => {
  let component: PhoneChangeColorComponent;
  let fixture: ComponentFixture<PhoneChangeColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneChangeColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneChangeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
