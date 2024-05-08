import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { MapsTooltipService } from '@syncfusion/ej2-angular-maps'




import { Component, OnInit } from '@angular/core';
import { world_map } from './world-map';

@Component({
imports: [
         MapsModule
    ],

providers: [MapsTooltipService],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'>
     <e-layers>
    <e-layer [shapeData] = 'shapeData' [tooltipSettings] ='tooltipSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public tooltipSettings?: object;
    public shapeData?: object;
    ngOnInit(): void {
        this.tooltipSettings ={
            visible: true,
            valuePath: 'name',
            fill: '#D0D0D0',
            textStyle: {
                color: 'green',
                fontFamily: 'Times New Roman',
                fontStyle: 'Sans-serif'
            }
        }
        this.shapeData = world_map;
    }
}



