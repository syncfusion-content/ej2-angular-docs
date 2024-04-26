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
    template: `<ejs-chart3d style='display:block;' align='center' [primaryXAxis]='primaryXAxis' [primaryYAxis]="primaryYAxis"
    rotation=7 tilt=10 depth=100 [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' type='StackingColumn100' xName='x' yName='y' name="General Motors" columnFacet="Cylinder">
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='StackingColumn100' xName='x' yName='y1' name="Honda" columnFacet="Cylinder">
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='StackingColumn100' xName='x' yName='y2' name="Suzuki" columnFacet="Cylinder">
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent {
    public dataSource?: Object[];
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public enableRotation?: boolean;
    ngOnInit(): void {
        this.dataSource = [
            { x: '2013', y: 9628912, y1: 4298390, y2: 2842133, y3: 2006366 },
            { x: '2014', y: 9609326, y1: 4513769, y2: 3016710, y3: 2165566 },
            { x: '2015', y: 7485587, y1: 4543838, y2: 3034081, y3: 2279503 },
            { x: '2016', y: 7793066, y1: 4999266, y2: 2945295, y3: 2359756 },
            { x: '2017', y: 6856880, y1: 5235842, y2: 3302336, y3: 2505741 }
        ];
        this.primaryXAxis = {
            valueType: 'Category',
            labelRotation: -45,
            labelPlacement: 'BetweenTicks'
        };
        this.primaryYAxis = {
           interval: 25
        };
        this.enableRotation = true;
    }
}


