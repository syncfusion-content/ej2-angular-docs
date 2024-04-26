import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';
import { MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-navigations';
import { Record, data } from './datasource';

@Component({
imports: [
        
        ContextMenuModule,
        ButtonModule
    ],


standalone: true,
  selector: 'app-root',
  template: `<div class="e-section-control">
            <!--target element-->
            <div id="target">Right click / Touch hold to open the ContextMenu</div>

            <!-- To Render ContextMenu. -->
            <ejs-contextmenu id='contextmenu' target='#target' [items]= 'items'
            (beforeItemRender)='itemRender($event)'></ejs-contextmenu>
            </div>`
})

export class AppComponent {
    public items: MenuItemModel[] = this.Items();
    public Items() {
    let record: Record;
    let menuItems: any[] = [];
    for (let i = 0; i < data.length; i++) {
        record = data[i] as Record;
        if (record.parentId) {
            if (!menuItems[record.parentId - 1].items) {
                menuItems[record.parentId - 1].items = []
            }
            menuItems[record.parentId - 1].items.push({ text: record.text });
        } else {
            menuItems.push({ text: record.text });
            }
        }
        return menuItems;
    }
    public itemRender(args: MenuEventArgs ) {
            if (!args.item.text) {
                args.element.classList.add('e-separator');
            }
        }
    }



