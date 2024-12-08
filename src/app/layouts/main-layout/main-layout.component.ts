import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '../sidebar/sidebar.module';

@Component({
    selector: 'app-main-layout',
    templateUrl: './main-layout.component.html',
    styleUrls: ['./main-layout.component.scss'],
    standalone: true,
    imports: [RouterModule, SidebarModule]
})
export class MainLayoutComponent { }
