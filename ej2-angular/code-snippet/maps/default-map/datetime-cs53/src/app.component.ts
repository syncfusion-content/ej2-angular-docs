


import { Component, OnInit } from '@angular/core';
import { Maps, Legend } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
import{ Population_Density } from './data'

Maps.Inject(Legend);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' [legendSettings] = 'legendSettings'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData'  [shapePropertyPath]= 'shapePropertyPath' [shapeDataPath]= 'shapeDataPath' [dataSource] = 'dataSource' [shapeSettings] = 'shapeSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public dataSource?: object[];
    public shapeData?: object;
    public shapePropertyPath?: string;
    public shapeDataPath?: string;
    public shapeSettings?: object;
    public legendSettings?: object;
    ngOnInit(): void {
        this.dataSource = Population_Density;
        this.shapeData = world_map;
        this.shapePropertyPath = 'name';
        this.shapeDataPath = 'name';
        this.shapeSettings = {
            colorValuePath: 'density',
            colorMapping: [
                {
                    from: 0, to: 100, color: 'rgb(153,174,214)',
                },
                {
                    from: 101, to: 200, color: 'rgb(115,143,199)',
                },
                {
                    color: 'rgb(77,112,184)'
                },
            ]
        };
        this.legendSettings = {
            visible: true
        }
    }
}



