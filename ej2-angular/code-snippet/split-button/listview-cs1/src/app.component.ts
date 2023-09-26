

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To render ListView. -->
               <ejs-listview id='listview' [dataSource]='listItems' [fields]='field' sortOrder='Descending'></ejs-listview>
               <!-- To render splitbutton. -->
               <ejs-splitbutton content="ClipBoard" target='#listview'></ejs-splitbutton>`
})

export class AppComponent {
    // Datasource for listview.
   public listItems: { [key: string]: Object }[] = [
        {
            'text': 'Cut',
            'category': 'Basic'
        },
        {
            'text': 'Copy',
            'category': 'Basic'
        },
        {
            'text': 'Paste',
            'category': 'Basic'
        },
        {
            'text': 'Paste as Formula',
            'category': 'Advanced'
        },
        {
            'text': 'Paste as Hyperlink',
            'category': 'Advanced'
        },
    ];

    public field: Object = { groupBy: 'category' };
}


