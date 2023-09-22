


import { Component, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' [titleSettings] = 'titleSettings' >
    <e-layers>
    <e-layer  [shapeData]= 'shapeData'  [shapePropertyPath]= 'shapePropertyPath' [shapeDataPath]= 'shapeDataPath' [dataSource] = 'dataSource' [shapeSettings] = 'shapeSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public titleSettings?: object;
    public dataSource?: object[];
    public shapeData?: object;
    public shapePropertyPath?: string;
    public shapeDataPath?: string;
    public shapeSettings?: object;
    ngOnInit(): void {
        this.titleSettings = {
         text: 'World map membership',
          titleStyle: {
            size: '16px'
           }
        }
        this.dataSource = [{  "Country": "China", "Membership": "Permanent"},
            {"Country": "France","Membership": "Permanent" },
            { "Country": "Russia","Membership": "Permanent"},
            {"Country": "Kazakhstan","Membership": "Non-Permanent"},
            { "Country": "Poland","Membership": "Non-Permanent"},
            {"Country": "Sweden","Membership": "Non-Permanent"}];
        this.shapeData = world_map;
        this.shapePropertyPath = 'name';
        this.shapeDataPath = 'Country';
        this.shapeSettings = {
                colorValuePath: 'Membership',
                colorMapping: [
                {
                    value: 'Permanent', color: '#D84444'
                },
                {
                    value: 'Non-Permanent', color: '#316DB5'
                }]
            };
   }
}



