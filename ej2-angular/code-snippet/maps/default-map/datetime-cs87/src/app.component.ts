


import { Component, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';
import { africa_continent } from './africa-continent';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' style='display:block'>
     <e-layers>
    <e-layer [urlTemplate]= 'urlTemplate'></e-layer>
    <e-layer [type] = 'type' [shapeData]='shapeData' [shapeSettings]='shapeSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public type?: string;
    public shapeData?: object;
    public shapeSettings?: object;
    public urlTemplate?: string;
    ngOnInit(): void {
           this.urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';
           this.type = 'SubLayer';
           this.shapeData = africa_continent;
           this.shapeSettings = {
               fill: 'blue'
           };
    }
}



