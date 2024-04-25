import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneDuplicateComponent } from './phone-duplicate.component';

describe('PhoneDuplicateComponent', () => {
  let component: PhoneDuplicateComponent;
  let fixture: ComponentFixture<PhoneDuplicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhoneDuplicateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneDuplicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
