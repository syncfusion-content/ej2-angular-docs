

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='150px' height='150px' lineWidth= 2 fill= '#0d3c9b' [rangeBandSettings] ='rangeBandSettings' [dataSource]="data" >
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [0, 6, 4, 1, 3, 2, 5] as any;
    public rangeBandSettings: object[] = [
            {
                startRange: 1,
                endRange: 2,
                color: '#bfd4fc',
                opacity:0.4
            },
            {
                startRange: 4,
                endRange: 5,
                color: 'red',
                opacity:0.4
            }
        ]
};


