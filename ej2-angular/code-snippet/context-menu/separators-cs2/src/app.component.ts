import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';
import { MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        ContextMenuModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
            <div id="target">Right click / Touch hold to open the ContextMenu</div>
            <ejs-contextmenu id='contextmenu' target='#target' [items]= 'menuItems' (beforeItemRender)='itemRender($event)'></ejs-contextmenu>
            </div>`
})

export class AppComponent {
    public menuItems: MenuItemModel[] = [
        {
            text: 'Cut'
        },
        {
            text: 'Copy'
        },
        {
            text: 'Paste'
        }];
    public itemRender(args: MenuEventArgs ) {
       if (args.item.text === "Copy") {
            args.element.innerHTML = '<u>C</u>opy';
       }
    }
}


