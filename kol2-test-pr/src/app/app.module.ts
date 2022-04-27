import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TTDataService } from './services/tt-data.service';
import { OrdersTTComponent } from './components/orders-tt/orders-tt.component';
import { OrdersItemTTComponent } from './components/orders-item-tt/orders-item-tt.component';
import { OrdersDetailsTTComponent } from './components/orders-details-tt/orders-details-tt.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        OrdersTTComponent,
        OrdersItemTTComponent,
        OrdersDetailsTTComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        TTDataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
