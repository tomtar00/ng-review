import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemTTComponent } from './orders-item-tt.component';

describe('OrdersItemTTComponent', () => {
  let component: OrdersItemTTComponent;
  let fixture: ComponentFixture<OrdersItemTTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersItemTTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
