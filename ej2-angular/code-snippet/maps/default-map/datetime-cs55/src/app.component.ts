


import { Component, OnInit } from '@angular/core';
import { Maps, Legend } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';

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
        this.dataSource = [
            { "Country": "China", "Membership": "Permanent", "visibility" : "true", "color" : "red"},
            { "Country": "France", "Membership": "Permanent", "visibility" : "true", "color" : "blue" },
            { "Country": "Russia", "Membership": "Permanent", "visibility" : "true", "color" : "green"},
            { "Country": "Kazakhstan", "Membership": "Both", "visibility" : "true", "color" : "orange"},
            { "Country": "Poland","Membership": "Non-Permanent", "visibility" : "true", "color" : "yellow"},
            { "Country": "Sweden", "Membership": "Non-Permanent", "visibility" : "true", "color" : "pink"}];
        this.shapeData = world_map;
        this.shapePropertyPath = 'name';
        this.shapeDataPath = 'Country';
        this.shapeSettings = {
            colorValuePath: 'color',
        };
        this.legendSettings = {
            visible: true,
            showLegendPath: 'visibility'
        }
    }
}



