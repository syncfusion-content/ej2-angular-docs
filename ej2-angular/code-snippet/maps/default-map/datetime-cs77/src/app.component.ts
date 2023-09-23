


import { Component, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' >
    <e-layers>
    <e-layer  [shapeData]= 'shapeData'  [shapePropertyPath]= 'shapePropertyPath' [shapeDataPath]= 'shapeDataPath' [dataSource] = 'dataSource' [shapeSettings]='shapeSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public dataSource?: object[];
    public shapeData?: object;
    public shapePropertyPath?: string;
    public shapeDataPath?: string;
    public shapeSettings?: object;
    ngOnInit(): void {
        this.dataSource = [  
            {
                'code': 'AF',
                'value': 53,
                'name': 'Afghanistan',
                'population': 29863010,
                'density': 119,
                'color': '#DEEBAE'
            },
            {
                'code': 'AL',
                'value': 117,
                'name': 'Albania',
                'population': 3195000,
                'density': 111,
                'color': '#A4D6AD'
            },
            {
                'code': 'DZ',
                'value': 15,
                'name': 'Algeria',
                'population': 34895000,
                'density': 15,
                'color': '#37AFAB'
            },
            {
                'code': 'AO',
                'value': 15,
                'name': 'Angola',
                'population': 18498000,
                'density': 15,
                'color': '#547C84'
            },
            {
                'code': 'AR',
                'value': 15,
                'name': 'Argentina',
                'population': 40091359,
                'density': 14,
                'color': '#CEBF93'
            },
            {
                'code': 'AM',
                'value': 109,
                'name': 'Armenia',
                'population': 3230100,
                'density': 108,
                'color': '#a69d70'
            }
        ]
        this.shapeData = world_map;
        this.shapePropertyPath = 'name';
        this.shapeDataPath= 'name';
        this.shapeSettings = {
            colorValuePath: 'color',
            fill: '#E5E5E5'
        }
    };
}



