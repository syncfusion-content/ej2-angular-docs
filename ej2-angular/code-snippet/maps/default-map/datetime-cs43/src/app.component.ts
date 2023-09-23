

import { Component, ViewEncapsulation } from '@angular/core';
import { usa_map } from './usa';

@Component({
    selector: 'app-container',
    // specifies the template string for the maps component
    template:`<ejs-maps id='container'>
    <e-layers>
    <e-layer [shapeData]='usmap' [markerSettings]='markerSettings'></e-layer>
    </e-layers>
    </ejs-maps>`,
    encapsulation: ViewEncapsulation.None
  })
  export class AppComponent {
       public usmap=usa_map;
       public markerSettings = [
        {
            dataSource: [
                { latitude: 37.0000, longitude: -120.0000, city: 'California' }
            ],
            visible:true,
            shape:'Circle',
            fill:'white',
            width:3,
            animationDuration:0,
            border:{width:2,color:'#333'}
       }
    ]
}


