import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPaymentProcessComponent } from './edit-payment-process.component';

describe('EditPaymentProcessComponent', () => {
  let component: EditPaymentProcessComponent;
  let fixture: ComponentFixture<EditPaymentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPaymentProcessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPaymentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
