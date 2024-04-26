import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations'




import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
imports: [
         ToolbarModule
    ],


standalone: true,
    selector: 'app-container',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None
})
export class DefaultToolbarComponent {
}



