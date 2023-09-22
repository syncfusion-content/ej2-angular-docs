


import { Component, OnInit } from '@angular/core';
import { Maps, DataLabel } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';

Maps.Inject(DataLabel);
@Component({
    selector: 'app-container',
    template:
    `<ejs-maps id='rn-container'>
    <e-layers>
    <e-layer  [shapeData]= 'shapeData' [shapePropertyPath]='shapePropertyPath' [shapeDataPath]='shapeDataPath' [shapeSettings] = 'shapeSettings' [dataSource]='dataSource' [dataLabelSettings] = 'dataLabelSettings'></e-layer>
    </e-layers>
    </ejs-maps>`
})

export class AppComponent implements OnInit {
    public shapeData?: object;
    public shapePropertyPath?: string;
    public shapeDataPath?: string;
    public dataSource?: object;
    public shapeSettings?: object;
    public dataLabelSettings?: object;
    ngOnInit(): void {
        this.shapeData = world_map;
        this.shapePropertyPath = 'name';
        this.shapeDataPath = 'name';
        this.dataSource = [
            {"name": "Afghanistan", "value": 53, "countryCode": "AF", "population": "29863010", "color": "red", "density": "119", "continent": "Asia"},
            {"name": "Albania", "value": 117, "countryCode": "AL", "population": "3195000", "color": "Blue", "density": "111", "continent": "Europe"},
            {"name": "Algeria", "value": 15, "countryCode": "DZ", "population": "34895000", "color": "Green", "density": "15", "continent": "Africa"}]
        this.shapeSettings = {
            autofill: true
        };
        this.dataLabelSettings = {
            visible: true,
            labelPath: "continent",
            smartLabelMode: 'Trim'
        };
    }
}



