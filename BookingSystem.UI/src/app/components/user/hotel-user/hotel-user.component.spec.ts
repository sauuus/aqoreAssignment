import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelUserComponent } from './hotel-user.component';

describe('HotelUserComponent', () => {
  let component: HotelUserComponent;
  let fixture: ComponentFixture<HotelUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
