import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';
import { ItemModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
imports: [
        
        DropDownButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render DropDownButton. -->
               <button ejs-dropdownbutton [items]='items' content='Find & Select' iconCss='e-icons e-search' iconPosition='Top' cssClass='e-custom'></button></div>`
})

export class AppComponent {
   // Initialize action items.
   public items: ItemModel[] = [
    {
        text: 'Find'
    },
    {
        text: 'Replace'
    },
    {
        text: 'Go To'
    },
    {
        text: 'Go To Special'
    }];
}


