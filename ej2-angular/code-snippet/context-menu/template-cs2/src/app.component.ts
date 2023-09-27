

import { Component } from '@angular/core';
import { MenuItemModel } from '@syncfusion/ej2-navigations';

@Component({
  selector: 'app-root',
  template: `<!--target element-->
            <div id="target">Right click / Touch hold to open the ContextMenu</div>
            <!-- To Render ContextMenu. -->
            <ejs-contextmenu id='contextmenu' #contextmenu target='#target' [items]='menuItems' [animationSettings]='animation'></ejs-contextmenu>`
})

export class AppComponent {
    public animation = {
        effect: 'FadeIn',
        duration: 800
    };
    public menuItems: MenuItemModel[] = [
        {
            text: 'Show All Bookmarks'
        },
        {
            text: 'Bookmarks Toolbar',
            items: [
                {
                    text: 'Most Visited',
                    items:[
                        {
                            text: 'Gmail'
                        },
                        {
                            text: 'Google'
                        }
                    ]
                },
                {
                    text: 'Recently Added'
                }
            ]
        }];

}


