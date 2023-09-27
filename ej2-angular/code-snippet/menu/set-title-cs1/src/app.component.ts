


import { Component } from '@angular/core';
import { enableRipple, closest } from '@syncfusion/ej2-base';
import { MenuItemModel, MenuEventArgs } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<div class="menu-section">
    <div class="menu-control">
        <ejs-menu [items]='menuItems' (beforeItemRender)='onBeforeItemRender($event)'>></ejs-menu>
    </div>
</div> `
})

export class AppComponent {
  
    public menuItems: MenuItemModel[] = [
        {
            id: 'settingIcon',
            iconCss: 'em-icons e-file',
            items: [
                { text: 'Open',
                  items: [
                      { text: 'Sub Option1' },
                      { text: 'Sub Option2' },
                  ]
                },
                { text: 'Save' },
                { separator: true },
                { text: 'Exit' }
            ]
        }
    ];

    public onBeforeItemRender(args: MenuEventArgs): void {
      if (args.item.id == 'settingIcon') {
        args.element.setAttribute('title', 'Settings');
      }
    }
}


