import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersTTComponent } from './orders-tt.component';

describe('OrdersTTComponent', () => {
  let component: OrdersTTComponent;
  let fixture: ComponentFixture<OrdersTTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersTTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersTTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
