import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CardComponent } from './shared/components/card.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        CardComponent
    ],
    providers: [],
})
export class AppModule { }