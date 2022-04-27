import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsTTComponent } from './orders-details-tt.component';

describe('OrdersDetailsTTComponent', () => {
  let component: OrdersDetailsTTComponent;
  let fixture: ComponentFixture<OrdersDetailsTTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersDetailsTTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
