import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ChipListModule } from '@syncfusion/ej2-angular-buttons'
import { Component } from '@angular/core';

@Component({
    imports: [
        ChipListModule
    ],
    standalone: true,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    // Set the required chip index value to the choiceSelected
    choiceSelected = [1, 3];
}