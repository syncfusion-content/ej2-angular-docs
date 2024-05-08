import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MapsModule } from '@syncfusion/ej2-angular-maps'
import { LegendService, ImageExportService } from '@syncfusion/ej2-angular-maps'




import { Component, ViewChild } from '@angular/core';
import { world_map } from './world-map';
import { MapsComponent } from '@syncfusion/ej2-angular-maps';

@Component({
imports: [
         MapsModule
    ],

providers: [LegendService, ImageExportService],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container' #maps [allowImageExport]=true [legendSettings] = 'legendSettings'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData'  [shapePropertyPath]= 'shapePropertyPath' [shapeDataPath]= 'shapeDataPath' [dataSource] = 'dataSource' [shapeSettings] = 'shapeSettings'></e-layer>
    </e-layers>
    </ejs-maps>  <button  id='print' (click)='export()'>Export</button>`
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
    public export() {
        this.mapObj?.export('JPEG', 'Maps');
    };
}



