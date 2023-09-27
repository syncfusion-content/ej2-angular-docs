

import { Component, ViewChild } from '@angular/core';
import { ContextMenuComponent, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  template: `<!--target element-->
            <div id="target">Right click / Touch hold to open the ContextMenu</div>
            <!-- To Render ContextMenu. -->
            <ejs-contextmenu #contextmenu target='#target' [items]='menuItems' (created)='onCreated()'></ejs-contextmenu>`
})

export class AppComponent {
     @ViewChild('contextmenu')
    public contextmenu?: ContextMenuComponent;

    public menuItems: MenuItemModel[] = [
    {
        text: 'View',
        items: [
          {
            text: 'Large icons'
          },
          {
            text: 'Medium icons'
          },
          {
            text: 'Small icons'
          }
        ]
    },
    {
        text: 'Refresh'
    },
    {
        text: 'Paste'
    },
    {
        separator: true
    },
    {
        text: 'New'
    },
    {
        separator: true
    },
    {
        text: 'Personalize'
    }];

    onCreated(): void {
      (this.contextmenu as ContextMenuComponent).insertAfter([{text: 'Sort By'}] , 'Refresh');
      (this.contextmenu as ContextMenuComponent).insertBefore([{text: 'Display Settings'}] , 'Personalize');
      (this.contextmenu as ContextMenuComponent).removeItems(['Paste']);
    }

}


