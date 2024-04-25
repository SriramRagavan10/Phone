import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDescendingComponent } from './phone-descending.component';

describe('PhoneDescendingComponent', () => {
  let component: PhoneDescendingComponent;
  let fixture: ComponentFixture<PhoneDescendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneDescendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneDescendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
