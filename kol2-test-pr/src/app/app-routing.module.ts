import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersDetailsTTComponent } from './components/orders-details-tt/orders-details-tt.component';
import { OrdersTTComponent } from './components/orders-tt/orders-tt.component';

const routes: Routes = [
    {
        path: '',
        component: OrdersTTComponent
    },
    {
        path: 'order/items/:id',
        component: OrdersDetailsTTComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
