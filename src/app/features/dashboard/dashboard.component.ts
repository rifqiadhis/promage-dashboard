import { Component, OnInit } from '@angular/core';
import { CardDataService } from '../../../app/core/services/card-data.service';
import { CardComponent } from '../../shared/components/card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [CardComponent, CommonModule]
})
export class DashboardComponent implements OnInit {
    cards: any[] = [];

    constructor(private cardDataService: CardDataService) { }

    ngOnInit(): void {
        this.cards = this.cardDataService.getCards();
    }
}
