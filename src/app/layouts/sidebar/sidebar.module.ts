import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SidebarDataService } from '../../core/services/sidebar-data.service';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [CommonModule, RouterModule]
})
export class SidebarModule implements OnInit {
    sidebarItems: any[] = [];
    isCollapsed = false;

    constructor(private sidebarDataService: SidebarDataService) { }

    ngOnInit(): void {
        this.sidebarItems = this.sidebarDataService.getSidebarItems();
    }

    toggleSidebar() {
        this.isCollapsed = !this.isCollapsed;
    }
}
