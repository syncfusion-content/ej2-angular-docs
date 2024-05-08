import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';
import { ItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
imports: [
        
        DropDownButtonModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render DropDownButton. -->
               <button ejs-dropdownbutton [items]='items' content='Clipboard' (beforeItemRender)="itemRender($event)"></button></div>`
})

export class AppComponent {
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
    public itemRender(args: MenuEventArgs) {
        if (args.item.text === 'Copy') {
            //To underline a particular text.
            args.element.innerHTML = '<u>C</u>opy';
        }
    }
}


