

import { Component } from '@angular/core';
import { enableRipple } from '@syncfusion/ej2-base';
import { FieldSettingsModel } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
    selector: 'app-root',
    template: `<ejs-menu [items]='data' [fields]='menuFields'></ejs-menu>`
})

export class AppComponent {
    //Menu datasource
    public data: { [key: string]: Object }[] = [
        { id: 'parent1', text: 'Events' },
        { id: 'parent2', text: 'Movies' },
        { id: 'parent3', text: 'Directory' },
        { id: 'parent4', text: 'Queries', pId: null as any },
        { id: 'parent5', text: 'Services', pId: null as any },

        { id: 'parent6', text: 'Conferences', pId: 'parent1' },
        { id: 'parent7', text: 'Music', pId: 'parent1' },
        { id: 'parent8', text: 'Workshops', pId: 'parent1' },

        { id: 'parent9', text: 'Now Showing', pId: 'parent2' },
        { id: 'parent10', text: 'Coming Soon', pId: 'parent2' },

        { id: 'parent10', text: 'Media Gallery', pId: 'parent3' },
        { id: 'parent11', text: 'Newsletters', pId: 'parent3' },

        { id: 'parent12', text: 'Our Policy', pId: 'parent4' },
        { id: 'parent13', text: 'Site Map', pId: 'parent4' },
        { id: 'parent14', text: 'Pop', pId: 'parent7' },
        { id: 'parent15', text: 'Folk', pId: 'parent7' },
        { id: 'parent16', text: 'Classical', pId: 'parent7' }
    ];

    //Menu fields definition
    public menuFields: FieldSettingsModel = {
        itemId: 'id',
        text: 'text',
        parentId: 'pId'
    };
}


