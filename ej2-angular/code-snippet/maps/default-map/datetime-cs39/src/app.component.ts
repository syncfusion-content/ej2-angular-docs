


import { Component, OnInit } from '@angular/core';
import { Maps, DataLabel } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';

Maps.Inject(DataLabel);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'  >
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [shapeSettings] = 'shapeSettings' [dataLabelSettings] = 'dataLabelSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public shapeSettings?: object;
    public dataLabelSettings?: object;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.shapeSettings = {
            autofill: true
        };
        this.dataLabelSettings = {
            visible: true,
            labelPath: 'name',
            smartLabelMode: 'Trim'
        };
   }
}



