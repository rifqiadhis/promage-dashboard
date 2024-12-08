import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarDataService {
    getSidebarItems() {
        return [
            { title: 'Dashboard', link: 'dashboard' },
            { title: 'Projects', link: 'projects' },
            { title: 'Tasks', link: 'tasks' },
        ];
    }
}
