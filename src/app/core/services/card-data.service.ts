import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CardDataService {
    getCards() {
        return [
            { title: 'Total Revenue', value: "$53,009", subvalue: '', lastMonth: '+12%', icon: 'chart', iconBgColor: '#D398E7' },
            { title: 'Projects', value: '95', subvalue: '/100', lastMonth: '-12%', icon: 'briefcase', iconBgColor: '#E89271' },
            { title: 'Time Spent', value: "1022 ", subvalue: '/1300 Hrs', lastMonth: '+8%', icon: 'clock', iconBgColor: '#70A1E5' },
            { title: 'Resources', value: "101 ", subvalue: '/120', lastMonth: '+2%', icon: 'layer', iconBgColor: '#F0C274' }
        ];
    }
}
