


import { Component, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';
import { usa_map } from './usa';
import { california } from './california';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'>
     <e-layers>
    <e-layer [shapeData] = 'shapeData' [shapeSettings] ='shapeSettings'></e-layer>
    <e-layer [shapeData] = 'shapeData1' [shapeSettings] ='shapeSettings1' [type] = 'type'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public shapeData?: object;
    public shapeSettings?: object;
    public shapeData1?: object;
    public type?: string;
    public shapeSettings1?: object;
    ngOnInit(): void {
        this.shapeData = usa_map;
        this.shapeSettings = {
            fill: '#E5E5E5',
            border: {
                color: 'black',
                width: 0.1
            }
        }
        this.shapeData1 = california;
        this.type = 'SubLayer',
        this.shapeSettings1 = {
            fill: 'rgba(141, 206, 255, 0.6)',
            border: {
                color: '#1a9cff',
                width: 0.25
            }
        }
    }
}



