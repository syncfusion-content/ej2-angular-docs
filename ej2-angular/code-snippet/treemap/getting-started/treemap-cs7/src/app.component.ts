

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;'  [dataSource]='data' weightValuePath='count' colorValuePath='color' [leafItemSettings]='leafItemSettings'>
    </ejs-treemap>`
})
export class AppComponent {
    public data: object[] = [
        { fruit:'Apple', count:5000, color: 'red'},
        { fruit:'Mango', count:3000, color:'blue'},
        { fruit:'Orange', count:2300, color:'green' },
        { fruit:'Banana', count:500, color:'yellow' },
        { fruit:'Grape', count:4300, color:'orange' },
        { fruit:'Papaya', count:1200, color:'pink' },
        { fruit:'Melon', count:4500, color:'violet' }

    ];
    public leafItemSettings: object = {
        labelPath: 'fruit'
    };
    }



