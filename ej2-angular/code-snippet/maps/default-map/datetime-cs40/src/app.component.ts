


import { Component, OnInit } from '@angular/core';
import { Maps, MapsTooltip, DataLabel, DataLabelSettings } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';

Maps.Inject(MapsTooltip, DataLabel);
@Component({
    selector: 'app-container',
    template: `<ejs-maps id='rn-container'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [shapeSettings] = 'shapeSettings' [dataLabelSettings] = 'dataLabelSettings'[tooltipSettings] = 'tooltipSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public shapeSettings?: object;
    public tooltipSettings?: object;
    public dataLabelSettings?: DataLabelSettings;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.shapeSettings = {
                autofill: true
            };
        this.dataLabelSettings = {
            visible: true,
            labelPath: 'name',
            smartLabelMode: 'Trim'
        } as DataLabelSettings;
        this.tooltipSettings = {
            visible: true,
            valuePath: 'name'
        };
   }
}



