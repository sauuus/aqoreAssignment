import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentProcessComponent } from './add-payment-process.component';

describe('AddPaymentProcessComponent', () => {
  let component: AddPaymentProcessComponent;
  let fixture: ComponentFixture<AddPaymentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPaymentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
