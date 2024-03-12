


import { Component, OnInit} from '@angular/core';
import { usa_map } from './usa';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [shapeSettings] = 'shapeSettings' [dataLabelSettings] = 'dataLabelSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public shapeSettings?: object;
    public dataLabelSettings?: object;
    ngOnInit(): void {
        this.shapeData = usa_map;
        this.shapeSettings = {
                autofill: true
            };
        this.dataLabelSettings = {
            visible: true,
            labelPath: 'name',
            border: {
                color: 'green',
                width: 2
            },
            fill: 'red',
            opacity: 0.9,
            textStyle: {
                color: 'blue',
                size: '10px',
                fontStyle: 'Sans-serif',
                fontWeight: 'normal',
            }
        };
    }
}



