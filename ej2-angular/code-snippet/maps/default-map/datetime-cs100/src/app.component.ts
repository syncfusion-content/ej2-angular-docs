


import { Component, OnInit } from '@angular/core';
import { world_map } from './world-map';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'>
     <e-layers>
    <e-layer [shapeData] = 'shapeData' [tooltipSettings] ='tooltipSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public tooltipSettings?: object;
    public shapeData?: object;
    ngOnInit(): void {
        this.tooltipSettings ={
            visible: true,
            valuePath: 'name'
        }
        this.shapeData = world_map;
    }
}



