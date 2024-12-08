import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CardDataService {
    getCards() {
        return [
            { title: 'Users', value: 1200 },
            { title: 'Sales', value: '$25,000' },
            { title: 'Orders', value: 450 },
            { title: 'Active Sessions', value: 75 }
        ];
    }
}
