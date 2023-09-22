

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;'  [dataSource]='data' weightValuePath='count' rangeColorValuePath='count'
    [leafItemSettings]='leafItemSettings'>
    </ejs-treemap>`
})
export class AppComponent {
    public data: object[] = [
                      { fruit:'Apple', count:5000 },
                       { fruit:'Mango', count:3000 },
                       { fruit:'Orange', count:2300 },
                       { fruit:'Banana', count:500 },
                       { fruit:'Grape', count:4300 },
                       { fruit:'Papaya', count:1200 },
                       { fruit:'Melon', count:4500 }
    ];
    public leafItemSettings: object = {
        labelPath: 'fruit',
        colorMapping:[
            {
               from:500,
               to:3000,
               minOpacity:0.2,
               maxOpacity:0.5,
               color:'orange'
           },
           {
               from:3000,
               to:5000,
               minOpacity:0.5,
               maxOpacity:0.8,
               color:'green'
           }
        ]
        };
}



