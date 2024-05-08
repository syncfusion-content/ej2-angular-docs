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
        <e-chart3d-series [dataSource]='dataSource' type='StackingColumn' xName='x' yName='y' name="General Motors" >
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='StackingColumn' xName='x' yName='y1' name="Honda">
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='StackingColumn' xName='x' yName='y2' name="Suzuki">
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
            { x: 2000, y: 0.61, y1: 0.03, y2: 0.48},{ x: 2001, y: 0.81, y1: 0.05, y2: 0.53 },
            { x: 2002, y: 0.91, y1: 0.06, y2: 0.57 },{ x: 2003, y: 1, y1: 0.09, y2: 0.61 }, { x: 2004, y: 1.19, y1: 0.14, y2: 0.63 },
            { x: 2005, y: 1.47, y1: 0.20, y2: 0.64 },{ x: 2006, y: 1.74, y1: 0.29, y2: 0.66 }, { x: 2007, y: 1.98, y1: 0.46, y2: 0.76 },
            { x: 2008, y: 1.99, y1: 0.64, y2: 0.77 },{ x: 2009, y: 1.70, y1: 0.75, y2: 0.55 }
        ];
        this.primaryXAxis = {
            valueType: 'Category',
            labelRotation: -45,
            labelPlacement: 'BetweenTicks'
        };
        this.enableRotation = true;
    }
}


