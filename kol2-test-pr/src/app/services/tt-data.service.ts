import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TTDataService {

    private url: string = 'http://localhost:3000'

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get(this.url + '/api/order/items');
    }

    getById(id: string) {
        return this.http.get(this.url + '/api/order/items/' + id);
    }
}
