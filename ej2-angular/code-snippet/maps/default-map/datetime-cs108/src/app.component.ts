import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { MapsTooltipService, DataLabelService } from '@syncfusion/ej2-angular-maps'




import { Component, OnInit } from '@angular/core';
import { usa_map } from './usa';

@Component({
imports: [
         MapsModule
    ],

providers: [MapsTooltipService, DataLabelService],
standalone: true,
    selector: 'app-container',
    template:
        `<ejs-maps id='rn-container'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [shapeSettings] = 'shapeSettings' [dataLabelSettings] = 'dataLabelSettings' [tooltipSettings] ='tooltipSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public tooltipSettings?: object;
    public shapeData?: object;
    public shapeSettings?: object;
    public dataLabelSettings?: object;
    ngOnInit(): void {
        this.shapeData = usa_map;
        this.shapeSettings = {
            autofill: true
        };
        this.tooltipSettings = {
            visible: true,
            valuePath: 'name'
        };
        this.dataLabelSettings = {
            visible: true,
            smartLabelMode: 'Hide',
            intersectionAction: 'Trim',
            labelPath: 'name',
            animationDuration: 2000
        };
    }
}



