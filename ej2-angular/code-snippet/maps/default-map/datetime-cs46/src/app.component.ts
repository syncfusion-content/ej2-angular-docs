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
    `<ejs-maps id='rn-container' format="c" useGroupingSeparator="true">
    <e-layers>
    <e-layer  [shapeData]= 'shapeData'  [shapePropertyPath]= 'shapePropertyPath' [shapeDataPath]= 'shapeDataPath' [dataSource] = 'dataSource' [shapeSettings] = 'shapeSettings' [tooltipSettings]='tooltipSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public dataSource?: object;
    public shapePropertyPath?: string;
    public shapeDataPath?: string;
    public shapeSettings?: object;
    public tooltipSettings?: object;
    public shapeData?: object;
    ngOnInit(): void {
        this.dataSource = [
            { "Country": "China", "Membership": "Permanent", population: '38332521'},
            { "Country": "France", "Membership": "Permanent", population: '19651127' },
            { "Country": "Russia", "Membership": "Permanent", population: '3090416'},
            { "Country": "Kazakhstan", "Membership": "Non-Permanent", population: '1232521'},
            { "Country": "Poland", "Membership": "Non-Permanent", population: '90332521'},
            { "Country": "Sweden", "Membership": "Non-Permanent", population: '383521'}
        ];
        this.shapeData = world_map;
        this.shapePropertyPath = 'name';
        this.shapeDataPath = 'Country';
        this.shapeSettings = {
             colorValuePath: 'Membership',
                colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }]
        };
        this.tooltipSettings ={
            visible: true,
            valuePath: 'population'
        };
    }
}



