

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;'  [dataSource]='data' weightValuePath='count' rangeColorValuePath='count' [leafItemSettings]='leafItemSettings'>
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
               to:2500,
               color:'orange'
           },
           {
               from:3000,
               to:4000,
               color:'green'
           },
           {
               color:'red'
           }
        ]
    };
    }



