import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'orders-item-tt',
    templateUrl: './orders-item-tt.component.html',
    styleUrls: ['./orders-item-tt.component.css']
})
export class OrdersItemTTComponent implements OnInit {

    @Input() image?: string;
    @Input() text?: string;
    @Input() id?: number;

    constructor() { }

    ngOnInit(): void {
    }

}
