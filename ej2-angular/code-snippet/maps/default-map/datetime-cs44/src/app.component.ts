

import { Component, ViewEncapsulation } from '@angular/core';
import { usa_map } from './usa';

@Component({
    selector: 'app-container',
    // specifies the template string for the maps component.
    template:`<ejs-maps id='container'>
    <e-layers>
    <e-layer [shapeData]='usmap' [markerSettings]='markerSettings'></e-layer>
    </e-layers>
    </ejs-maps>`,
    encapsulation: ViewEncapsulation.None
  })
  export class AppComponent {
       public usmap=usa_map;
       // Initializing Map with Marker sttings.
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
        },
        {
            dataSource: [
                { latitude: 40.7127, longitude: -74.0059, city: 'New York' }
            ],
            visible:true,
            shape:'Rectangle',
            fill:'yellow',
            width:15,
            height:4,
            animationDuration:0,
            border:{width:2,color:'#333'}
        },
        {
            dataSource: [
                { latitude: 42, longitude: -93, city: 'Iowa' }
            ],
            visible:true,
            shape:'Diamond',
            fill:'white',
            width:10,
            height:10,
            animationDuration:0,
            border:{width:2,color:'blue'}
        },
        {
            dataSource: [
                { latitude:36.499589049395055, longitude:-103.042108197135548, city:'New Mexico'}
            ],
            visible:true,
            shape:'Balloon',
            fill:'red',
            width:10,
            height:15,
            animationDuration:0,
            border:{width:2,color:'#333'}
        },
        {
            dataSource: [
                { latitude:36.360624205142919, longitude:-94.595916790727287, city:'Oklahoma'}
            ],
            visible:true,
            shape:'Triangle',
            fill:'blue',
            width:10,
            animationDuration:0,
            border:{width:2,color:'#333'}
        }
    ]
}


