

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;'  [dataSource]='data' weightValuePath='count' [legendSettings]='legendSettings'
    [leafItemSettings]='leafItemSettings' colorValuePath='color'>
    </ejs-treemap>`
})
export class AppComponent {
    public data: object[] = [{ fruit:'Apple', count:5000, visibility: true, color:'red' },
                       { fruit:'Mango', count:3000, visibility: false, color:'blue' },
                       { fruit:'Orange', count:2300, visibility: true, color:'green' },
                       { fruit:'Banana', count:500, visibility: false, color:'yellow' },
                       { fruit:'Grape', count:4300, visibility: true, color:'blue' },
                       { fruit:'Papaya', count:1200, visibility: false, color:'black' },
                       { fruit:'Melon', count:4500, visibility: true, color:'skyblue' }
    ];
    public legendSettings: object= {
        visible: true,
        valuePath:'fruit',
        removeDuplicateLegend: true
    };
    public leafItemSettings:object= {
        labelPath: 'fruit',
    };
}



