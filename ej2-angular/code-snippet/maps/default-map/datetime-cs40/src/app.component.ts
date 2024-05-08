import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { MapsTooltipService, DataLabelService } from '@syncfusion/ej2-angular-maps'




import { Component, OnInit } from '@angular/core';
import { world_map } from './world-map';

@Component({
imports: [
         MapsModule
    ],

providers: [MapsTooltipService, DataLabelService],
standalone: true,
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
        this.tooltipSettings = {
            visible: true,
            valuePath: 'name'
        };
   }
}



