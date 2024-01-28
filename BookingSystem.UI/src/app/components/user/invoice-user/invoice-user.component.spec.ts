import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceUserComponent } from './invoice-user.component';

describe('InvoiceUserComponent', () => {
  let component: InvoiceUserComponent;
  let fixture: ComponentFixture<InvoiceUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
