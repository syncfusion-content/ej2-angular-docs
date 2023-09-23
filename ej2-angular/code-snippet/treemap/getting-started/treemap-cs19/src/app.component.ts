

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;' [palette] ='palette' [dataSource]='data' weightValuePath='count'
    renderDirection='TopLeftBottomRight' >
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
    public leafItemSettings:object= {
        labelPath: 'fruit'
     };
    public palette:object =['#71B081','#5A9A77', '#498770', '#39776C', '#266665','#124F5E'];
}



