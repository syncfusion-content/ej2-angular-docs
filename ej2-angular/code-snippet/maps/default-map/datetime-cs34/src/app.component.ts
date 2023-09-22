


import { Component, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'>
     <e-layers>
    <e-layer [shapeData] = 'shapeData'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public shapeData?: object;
    ngOnInit(): void {
        this.shapeData = world_map;
    }
}


