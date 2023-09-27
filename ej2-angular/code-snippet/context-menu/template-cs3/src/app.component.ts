

import { Component, ViewChild } from '@angular/core';
import { ContextMenuComponent, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  template: `<!--target element-->
            <div id="target">Right click / Touch hold to open the ContextMenu</div>
            <!-- To Render ContextMenu. -->
            <ejs-contextmenu #contextmenu target='#target' [items]='menuItems' (created)='onCreated()' (beforeOpen)='beforeOpen()'></ejs-contextmenu>`
})

export class AppComponent {

    @ViewChild('contextmenu')
    public contextmenu?: ContextMenuComponent;

    // ContextMenu items definition
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
        text: 'Sort By'
    },
    {
        text: 'Refresh'
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
        text: 'Display Settings'
    },
    {
        text: 'Personalize'
    }];

    onCreated(): void {
      (this.contextmenu as ContextMenuComponent).enableItems(['Display Settings'], false);
    }

    beforeOpen(): void {
      (this.contextmenu as ContextMenuComponent).enableItems(['Medium icons'], false);
    }
}


