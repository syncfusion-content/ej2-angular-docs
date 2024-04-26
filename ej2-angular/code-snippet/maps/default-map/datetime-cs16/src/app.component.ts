import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'



import { Component, OnInit } from '@angular/core';
import { world_map } from './world-map';
import { Population_Density } from './data';

@Component({
imports: [
         MapsModule
    ],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [shapeDataPath] = 'shapeDataPath' [shapePropertyPath] ='shapePropertyPath' [shapeSettings] = 'shapeSettings' [dataSource] ='dataSource'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public shapeDataPath?: string;
    public shapePropertyPath ?: string;
    public dataSource ?: object[];
    public shapeSettings?: object;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.shapeDataPath = 'name';
        this.shapePropertyPath= 'name';
        this.dataSource= Population_Density;
        this.shapeSettings = {
            colorValuePath: 'density',
            fill: '#E5E5E5',
            colorMapping: [
                {
                    from: 0, to: 100, color: ['red', 'blue']
                },
                {
                    from: 101, to: 200, color: ['green','violet']
                },
            ]
        };
   }
}


