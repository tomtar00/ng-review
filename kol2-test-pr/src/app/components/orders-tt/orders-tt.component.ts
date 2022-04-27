import { Component, OnInit } from '@angular/core';
import { TTDataService } from 'src/app/services/tt-data.service';

@Component({
    selector: 'orders-tt',
    templateUrl: './orders-tt.component.html',
    styleUrls: ['./orders-tt.component.css']
})
export class OrdersTTComponent implements OnInit {

    public items$: any;

    constructor(private service: TTDataService) { }

    ngOnInit(): void {
        this.getAll();
    }

    getAll(): void {
        this.service.getAll().subscribe(response => {
            this.items$ = response;
            this.items$ = this.items$.orders
        });
    }

}
