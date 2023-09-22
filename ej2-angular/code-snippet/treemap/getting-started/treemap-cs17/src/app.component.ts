

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-treemap id='container' style='display: block;'  [dataSource]='data' weightValuePath='count' [legendSettings]='legendSettings' colorValuePath= 'color' enableRtl='true'
    [leafItemSettings]='leafItemSettings' >
    </ejs-treemap>`
})
export class AppComponent {
    public data: object[] = [{ Car:'Mustang', Brand:'Ford', count:232, color: '#71B081' },
                       { Car:'EcoSport', Brand:'Ford', count:121,  color: '#5A9A77' },
                       { Car:'Swift', Brand:'Maruti', count:143, color: '#498770' },
                       { Car:'Baleno', Brand:'Maruti', count:454, color: '#39776C' },
                       { Car:'Vitara Brezza', Brand:'Maruti', count:545 , color: '#266665' },
                       { Car:'A3 Cabriolet', Brand:'Audi',count:123, color: '#124F5E' }

    ];
    public legendSettings: object= {
        visible: true,
        position:'Top'

    };
    public leafItemSettings:object= {
        labelPath: 'Car'
     };
}



