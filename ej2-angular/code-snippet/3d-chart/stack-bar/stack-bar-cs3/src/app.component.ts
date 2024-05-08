import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Chart3DAllModule} from '@syncfusion/ej2-angular-charts'

import { Component } from '@angular/core';

@Component({
imports: [
         Chart3DAllModule
    ],


standalone: true,
    selector: 'app-container',
    // specifies the template string for the Chart component
    template: `<ejs-chart3d style='display:block;' align='center' [primaryXAxis]='primaryXAxis'
    rotation=7 tilt=10 depth=100 [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' type='StackingBar' xName='x' yName='y' name="America" columnFacet="Cylinder">
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='StackingBar' xName='x' yName='y1' name="Canada" columnFacet="Cylinder">
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='StackingBar' xName='x' yName='y2' name="France" columnFacet="Cylinder">
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent {
    public dataSource?: Object[];
    public primaryXAxis?: Object;
    public enableRotation?: boolean;
    ngOnInit(): void {
        this.dataSource = [
            { x: 'Sochi', y: 9, y1: 10, y2: 4 },
            { x: 'Rio', y: 46, y1: 4, y2: 10 },
            { x: 'Pyeongchang', y: 9, y1: 11, y2: 5 },
            { x: 'Tokyo', y: 39, y1: 7, y2: 10 },
            { x: 'Beijing', y: 8, y1: 4, y2: 5 }
        ];
        this.primaryXAxis = {
            valueType: 'Category',
            labelRotation: -45,
            labelPlacement: 'BetweenTicks'
        };
        this.enableRotation = true;
    }
}


