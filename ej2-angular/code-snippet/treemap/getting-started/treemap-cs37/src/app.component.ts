

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;'  [dataSource]='data' weightValuePath='count' [legendSettings]='legendSettings'
    [leafItemSettings]='leafItemSettings' rangeColorValuePath='count'>
    </ejs-treemap>`
})
export class AppComponent {
    public data: object[] = [{ fruit:'Apple', count:5000 },
                       { fruit:'Mango', count:3000 },
                       { fruit:'Orange', count:2300 },
                       { fruit:'Banana', count:500 },
                       { fruit:'Grape', count:4300 },
                       { fruit:'Papaya', count:1200 },
                       { fruit:'Melon', count:4500 }
    ];
    public legendSettings: object= {
        visible: true
    };
    public leafItemSettings:object= {
        labelPath: 'fruit',
         colorMapping:[
            {
               from:500,
               to:2500,
               color:'orange',
               showLegend: true
           },
           {
               from:3000,
               to:5000,
               color:'green',
               showLegend: false
           },
           {
               color:'red',
               showLegend: true
           }
        ]
    }
}



