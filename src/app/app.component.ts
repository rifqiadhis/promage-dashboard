import { Component, } from '@angular/core';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [MainLayoutComponent]
})
export class AppComponent { }
