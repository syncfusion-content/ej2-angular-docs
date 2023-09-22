


import { Component, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';
import { usa_map } from './usa';
import { world_map } from './world-map';
import { california } from './california';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' [baseLayerIndex] ='baseLayerIndex'>
     <e-layers>
    <e-layer [shapeData] = 'shapeData'></e-layer>
    <e-layer [shapeData] = 'shapeData1'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public shapeData?: object;
    public shapeData1?: object;
    public baseLayerIndex?: number;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.shapeData1 = usa_map;
        this.baseLayerIndex = 1;
    }
}



