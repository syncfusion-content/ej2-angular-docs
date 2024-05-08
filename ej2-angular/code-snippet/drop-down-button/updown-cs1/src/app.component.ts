import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component, ViewChild } from '@angular/core';
import { ItemModel, BeforeOpenCloseMenuEventArgs, DropDownButtonComponent  } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
imports: [
        
        DropDownButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render DropDownButton. -->
               <button ejs-dropdownbutton #dropdownbutton [items]='items' content='Clipboard' (beforeOpen)='beforeOpen($event)' (beforeClose)='beforeClose($event)'></button></div>`
})

export class AppComponent {
   @ViewChild('dropdownbutton')
   public dropdownbutton: DropDownButtonComponent | any;
   // Initialize action items.
   public items: ItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];
    // To update up arrow with `e-caret-up` class.
    public beforeOpen (args: BeforeOpenCloseMenuEventArgs) {
        this.dropdownbutton.cssClass = 'e-caret-up';
    }
    // To remove `e-caret-up` class.
    public beforeClose (args: BeforeOpenCloseMenuEventArgs) {
        this.dropdownbutton.cssClass = '';
    }

}


