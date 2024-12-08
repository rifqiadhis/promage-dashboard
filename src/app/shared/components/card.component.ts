import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [CommonModule]
})
export class CardComponent {
    @Input() data!: { title: string, value: string | number, subvalue: string | number, lastMonth: string, icon: string, iconBgColor: string };
}
