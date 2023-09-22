

import { Component, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
import { unCountries } from './data';

@Component({
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
        this.shapeDataPath = 'Country';
        this.shapePropertyPath= 'name';
        this.dataSource = unCountries;
        this.shapeSettings = {
            fill: '#E5E5E5',
            colorMapping: [
                {
                    value: 'Permanent',
                    color: '#C3E6ED'
                },
                {
                    color: '#F1931B',
                    value: 'Non-Permanent'
                }
            ],
            colorValuePath: 'Membership'
        }
   }
}


