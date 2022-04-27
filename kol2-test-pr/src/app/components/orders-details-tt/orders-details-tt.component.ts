import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TTDataService } from 'src/app/services/tt-data.service';

@Component({
    selector: 'orders-details-tt',
    templateUrl: './orders-details-tt.component.html',
    styleUrls: ['./orders-details-tt.component.css']
})
export class OrdersDetailsTTComponent implements OnInit {

    public image: string = '';
    public text: string = '';

    constructor(private service: TTDataService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        let id: string = '';
        this.route.paramMap.subscribe((params: any) => {
            id = params.get('id')
        })

        this.service.getById(id).subscribe((response: any) => {
            this.image = response.order['image']
            this.text = response.order['text']
        })
    }

}
