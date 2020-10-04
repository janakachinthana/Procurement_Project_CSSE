import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNowFormComponent } from './order-now-form.component';

describe('OrderNowFormComponent', () => {
  let component: OrderNowFormComponent;
  let fixture: ComponentFixture<OrderNowFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderNowFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderNowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
