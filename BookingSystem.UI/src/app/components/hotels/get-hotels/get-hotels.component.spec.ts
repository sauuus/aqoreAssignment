import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetHotelsComponent } from './get-hotels.component';

describe('GetHotelsComponent', () => {
  let component: GetHotelsComponent;
  let fixture: ComponentFixture<GetHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetHotelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
