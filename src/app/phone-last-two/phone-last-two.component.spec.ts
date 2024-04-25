import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneLastTwoComponent } from './phone-last-two.component';

describe('PhoneLastTwoComponent', () => {
  let component: PhoneLastTwoComponent;
  let fixture: ComponentFixture<PhoneLastTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneLastTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneLastTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
