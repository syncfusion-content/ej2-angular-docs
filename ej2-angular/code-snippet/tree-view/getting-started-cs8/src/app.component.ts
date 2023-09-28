

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<div id='treeparent'><ejs-treeview id='treeelement' [fields]='field'></ejs-treeview></div>`
})
export class AppComponent {
    constructor() {
    }
    // defined the array of data
    public hierarchicalData: Object[] = [
       { id: '01', name: 'Music', expanded: true,
            subChild: [
                {id: '01-01', name: 'Gouttes.mp3'},
                      ]
        },
        {
            id: '02', name: 'Videos',
            subChild: [
                {id: '02-01', name: 'Naturals.mp4'},
                {id: '02-02', name: 'Wild.mpeg'}
        ]
        },
        {
            id: '03', name: 'Documents',
            subChild: [
                {id: '03-01', name: 'Environment Pollution.docx'},
                {id: '03-02', name: 'Global Water, Sanitation, & Hygiene.docx'},
                {id: '03-03', name: 'Global Warming.ppt'},
                {id: '03-02', name: 'Social Network.pdf'},
                {id: '03-03', name: 'Youth Empowerment.pdf'},
            ]
        }
    ];
    public field:Object ={ dataSource: this.hierarchicalData, id: 'id', text: 'name', child: 'subChild' };
}


