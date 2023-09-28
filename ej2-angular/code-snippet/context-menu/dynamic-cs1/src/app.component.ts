

import { Component, ViewChild } from '@angular/core';
import { MenuItemModel, BeforeOpenCloseMenuEventArgs } from '@syncfusion/ej2-navigations';
import { ContextMenuComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-root',
  template: `<!--target element-->
            <div id="target">
              <div id='left' class='e-div'>Clipboard</div>
              <div id='right' class='e-div'>Editor</div>
            </div>
            <!-- To Render ContextMenu. -->
            <ejs-contextmenu #contextmenu target='#target .e-div' [items]= 'menuItems' (beforeOpen)='beforeOpen($event)'></ejs-contextmenu>`
})

export class AppComponent {
    @ViewChild('contextmenu')
    public cmenu?: ContextMenuComponent;
    // Initialize menu items.
    public menuItems: MenuItemModel[] = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    },
    {
        text: 'Add'
    },
    {
        text: 'Edit'
    },
    {
        text: 'Delete'
    }];

    public beforeOpen (args: BeforeOpenCloseMenuEventArgs) {
       // To hide/show items on right click.
        if ((args.event.target as HTMLElement).id === 'right') {
                (this.cmenu as ContextMenuComponent).hideItems(['Cut', 'Copy', 'Paste']);
                (this.cmenu as ContextMenuComponent).showItems(['Add', 'Edit', 'Delete']);
        } else if ((args.event.target as HTMLElement).id === 'left') {
            (this.cmenu as ContextMenuComponent).showItems(['Cut', 'Copy', 'Paste']);
            (this.cmenu as ContextMenuComponent).hideItems(['Add','Edit','Delete']);
        }
    }
}


