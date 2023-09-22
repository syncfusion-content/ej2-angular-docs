

import { Component, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
import { Population_Density } from './data';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'  >
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
                    from: 0.00001, to: 100, color: 'rgb(153,174,214)'
                },
                {
                    from: 100, to: 200, color: 'rgb(115,143,199)'
                },
                {
                    from: 200, to: 300, color: 'rgb(77,112,184)'
                },
                {
                    from: 300, to: 500, color: 'rgb(38,82,168)'
                },
                {
                    from: 500, to: 19000, color: 'rgb(0,51,153)'
                }
            ]
        };
   }
}


