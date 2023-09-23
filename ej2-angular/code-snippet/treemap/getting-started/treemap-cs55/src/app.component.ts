

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;'  [dataSource]='data' weightValuePath='count'
    [leafItemSettings]='leafItemSettings' [tooltipSettings]='tooltipSettings'>
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
    public leafItemSettings: object = {
        labelPath: 'fruit'
    };
    public tooltipSettings: object = {
            visible: true,
            template:'<div><p>Name: ${fruit}</p><p>Total Count: ${count}</p></div>'
    };
}



