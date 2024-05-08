import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { LegendService, BubbleService } from '@syncfusion/ej2-angular-maps'



import { Component, OnInit } from '@angular/core';
import { world_map } from './world-map';

@Component({
imports: [
         MapsModule
    ],

providers: [LegendService, BubbleService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-maps id='rn-container'  [legendSettings] ='legendSettings'  >
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [bubbleSettings] = 'bubbleSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public shapeDataPath?: object | any;
    public shapePropertyPath?: object | any;
    public bubbleSettings?: object;
    public legendSettings?: object;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.shapeDataPath = 'name',
        this.shapePropertyPath = 'name',
        this.bubbleSettings = [{
            visible: true,
            minRadius: 20,
            dataSource:  [
                {color: 'green', name: 'India', population: '38332521' },
                {color: 'purple', name: 'New Zealand', population: '19651127' },
                {color: 'blue', name: 'Pakistan', population: '3090416' }
            ],
            maxRadius: 40,
            valuePath: 'population',
            colorValuePath: 'color'
        }];
        this.legendSettings = {
            visible: true,
            type: 'Bubbles'
        };
   }
}


