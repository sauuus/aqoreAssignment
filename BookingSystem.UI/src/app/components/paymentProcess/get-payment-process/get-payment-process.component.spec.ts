import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPaymentProcessComponent } from './get-payment-process.component';

describe('GetPaymentProcessComponent', () => {
  let component: GetPaymentProcessComponent;
  let fixture: ComponentFixture<GetPaymentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPaymentProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPaymentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
