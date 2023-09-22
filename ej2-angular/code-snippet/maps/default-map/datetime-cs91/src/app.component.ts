


import { Component, OnInit } from '@angular/core';
import { Maps, Selection, Legend } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
Maps.Inject(Selection, Legend);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' [legendSettings]='legendSettings'>
     <e-layers>
    <e-layer [shapeData] = 'shapeData' [shapePropertyPath]='shapePropertyPath' [shapeDataPath]='shapeDataPath' [dataSource]='dataSource' [shapeSettings]='shapeSettings' [selectionSettings] ='selectionSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})
export class AppComponent implements OnInit {
    public selectionSettings?: object;
    public shapeData?: object;
    public shapePropertyPath?: string;
    public shapeDataPath?: string;
    public dataSource?: object;
    public shapeSettings?: object;
    public legendSettings?: object;
    ngOnInit(): void {
        this.selectionSettings = {
            enable: true,
            fill: 'blue',
            border: { color: 'white', width: 2}
        };
        this.shapeData = world_map;
        this.shapePropertyPath = "name";
        this.shapeDataPath = "Country";
        this.dataSource = [
            {  "Country": "China", "Membership": "Permanent"},
            { "Country": "France","Membership": "Permanent" },
            { "Country": "Russia","Membership": "Permanent"},
            { "Country": "Kazakhstan","Membership": "Non-Permanent"},
            { "Country": "Poland","Membership": "Non-Permanent"},
            { "Country": "Sweden","Membership": "Non-Permanent"}
        ];
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
        this.legendSettings = {
            visible: true
    }
}
}



