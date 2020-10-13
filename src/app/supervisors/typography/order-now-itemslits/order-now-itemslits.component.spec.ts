import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNowItemslitsComponent } from './order-now-itemslits.component';

describe('OrderNowItemslitsComponent', () => {
  let component: OrderNowItemslitsComponent;
  let fixture: ComponentFixture<OrderNowItemslitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNowItemslitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNowItemslitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
