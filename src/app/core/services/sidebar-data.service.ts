import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SidebarDataService {
    getSidebarItems() {
        return [
            { title: 'Dashboard', link: 'dashboard', icon: 'category' },
            { title: 'Projects', link: 'projects', icon: 'briefcase' },
            { title: 'Tasks', link: 'tasks', icon: 'task' },
            { title: 'Time Log', link: 'time-log', icon: 'clock' },
            { title: 'Resource', link: 'resource', icon: 'data' },
            { title: 'Users', link: 'users', icon: 'people' },
            { title: 'Settings', link: 'settings', icon: 'setting' },
        ];
    }
}
