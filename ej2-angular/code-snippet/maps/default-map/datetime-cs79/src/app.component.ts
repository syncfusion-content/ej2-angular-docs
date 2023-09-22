


import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { Maps, Legend } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';
import { PrintService, MapsComponent, LegendService } from '@syncfusion/ej2-angular-maps';

@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' #maps [allowPrint]=true [legendSettings] = 'legendSettings'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData'  [shapePropertyPath]= 'shapePropertyPath' [shapeDataPath]= 'shapeDataPath' [dataSource] = 'dataSource' [shapeSettings] = 'shapeSettings'></e-layer>
    </e-layers>
    </ejs-maps>  <button  id='print' (click)='print()'>Print</button>`,
    providers: [PrintService, LegendService]
})

export class AppComponent {
    @ViewChild('maps')
    public mapObj?: MapsComponent;
    public dataSource: object[] = [
        {  "Country": "China", "Membership": "Permanent"},
        { "Country": "France", "Membership": "Permanent" },
        { "Country": "Russia", "Membership": "Permanent"},
        { "Country": "Kazakhstan", "Membership": "Non-Permanent"},
        { "Country": "Poland", "Membership": "Non-Permanent"},
        { "Country": "Sweden", "Membership": "Non-Permanent"}];
    public shapeData: object = world_map;
    public shapePropertyPath: string = 'name';
    public shapeDataPath: string= 'Country';
    public shapeSettings: object = {
        colorValuePath: 'Membership',
        colorMapping: [
            {
                value: 'Permanent', color: '#D84444'
            },
            {
                value: 'Non-Permanent', color: '#316DB5'
            }]
        };
    public legendSettings: object = {
        visible: true
    };
    public print() {
        this.mapObj?.print();
    };
}



