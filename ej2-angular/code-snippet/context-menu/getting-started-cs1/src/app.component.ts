

import { Component } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  template: `<div class="e-section-control">
            <!--target element-->
            <div id="target">Right click / Touch hold to open the ContextMenu</div>

            <!-- To Render ContextMenu. -->
            <ejs-contextmenu id='contextmenu' target='#target' [items]= 'menuItems'></ejs-contextmenu>
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
}


