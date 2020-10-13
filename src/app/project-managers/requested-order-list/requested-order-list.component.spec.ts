import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedOrderListComponent } from './requested-order-list.component';

describe('RequestedOrderListComponent', () => {
  let component: RequestedOrderListComponent;
  let fixture: ComponentFixture<RequestedOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestedOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
