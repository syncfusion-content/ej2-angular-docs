import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProgressButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { Component } from '@angular/core';

@Component({
    imports: [ProgressButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
        <!-- To render progress button. -->
        <button ejs-progressbutton content='Spin Left' [enableProgress]='true'></button></div>`
})

export class AppComponent { }
