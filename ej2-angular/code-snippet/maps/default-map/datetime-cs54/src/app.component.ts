


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
            { "Country": "China", "Membership": "Permanent"},
            { "Country": "France", "Membership": "Permanent" },
            { "Country": "Russia","Membership": "Permanent"},
            { "Country": "Kazakhstan", "Membership": "Both"},
            { "Country": "Poland", "Membership": "Non-Permanent"},
            { "Country": "Sweden", "Membership": "Non-Permanent"}];
        this.shapeData = world_map;
        this.shapePropertyPath = 'name';
        this.shapeDataPath = 'Country';
        this.shapeSettings = {
            colorValuePath: 'Membership',
            colorMapping: [
                {
                    value: 'Permanent', color: '#D84444', showLegend : true
                },
                {
                    value: 'Non-Permanent', color: '#316DB5', showLegend : false
                },
                {
                    color: 'violet', showLegend : false
                }]
        };
        this.legendSettings = {
            visible: true
        }
    }
}



