

import { Component, ViewChild } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { ToolbarComponent, MenuAnimationSettingsModel } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<div class="control-section">
                 <div class="toolbar-menu-control">
                    <div id='menu'><ejs-menu [items]='menuItems' [fields]='menuFields' [animationSettings]='animationSettings'></ejs-menu></div>
                 <ejs-toolbar id="shoppingtoolbar" #toolbar (created)='created()'>
                    <e-items>
                        <e-item template='#menu'></e-item>
                        <e-item prefixIcon='em-icons e-shopping-cart' align='Right'></e-item>
                    </e-items>
                 </ejs-toolbar>
                </div>
               </div>
    `
})

export class AppComponent {
    @ViewChild('toolbar')
    public toolbarObj?: ToolbarComponent;

    public menuItems: { [key: string]: Object }[] = [
        {
            header: 'Events',
            subItems: [
                { text: 'Conferences' },
                { text: 'Music' },
                { text: 'Workshops' }
            ]
        },
        {
            header: 'Movies',
            subItems: [
                { text: 'Now Showing' },
                { text: 'Coming Soon' }
            ]
        },
        {
            header: 'Directory',
            subItems: [
                { text: 'Media Gallery' },
                { text: 'Newsletters' }
            ]
        },
        {
            header: 'Queries',
            subItems: [
                { text: 'Our Policy' },
                { text: 'Site Map' },
                { text: '24x7 Support' }
            ]
        },
        { header: 'Services' }
    ];

    public menuFields: Object = {
        text: ['header', 'text', 'value'],
        children: ['subItems', 'options']
    };

    public animationSettings: MenuAnimationSettingsModel = { effect: 'None' };

    public created(): void {
        this.toolbarObj?.refreshOverflow();
    }
}


