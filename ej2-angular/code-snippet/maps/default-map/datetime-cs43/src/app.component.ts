import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { MarkerService } from '@syncfusion/ej2-angular-maps'



import { Component, ViewEncapsulation } from '@angular/core';
import { usa_map } from './usa';

@Component({
imports: [
         MapsModule
    ],

providers: [MarkerService],
standalone: true,
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


