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
               <button ejs-dropdownbutton [items]='items' content='Message' iconCss='ddb-icons e-message' disabled='true'></button>
               </div>`
})

export class AppComponent {
   // Initialize action items.
   public items: ItemModel[] = [
    {
        text: 'Edit'
    },
    {
        text: 'Delete'
    },
    {
        text: 'Mark as Read'
    },
    {
        text: 'Like Message'
    }];

}


