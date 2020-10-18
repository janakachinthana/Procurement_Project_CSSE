import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialRequestedOrdersComponent } from './special-requested-orders.component';

describe('SpecialRequestedOrdersComponent', () => {
  let component: SpecialRequestedOrdersComponent;
  let fixture: ComponentFixture<SpecialRequestedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialRequestedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialRequestedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
