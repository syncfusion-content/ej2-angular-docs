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
    template: `<ejs-chart3d #chart style='display:block;' align='center' [primaryXAxis]='primaryXAxis' [useGroupingSeparator]=true
    rotation=7 tilt=10 depth=100 [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y'>
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
            { x: 10, y: 7000 }, { x: 20, y: 1000 }, { x: 30, y: 12000 }, { x: 40, y: 14000 }, { x: 50, y: 11000 }, { x: 60, y: 5000 },
            { x: 70, y: 7300 }, { x: 80, y: 9000 }, { x: 90, y: 12000 }, { x: 100, y: 14000 }, { x: 110, y: 11000 }, { x: 120, y: 5000 }
        ];
        this.enableRotation = true;
        this.primaryXAxis = {
            valueType: 'Double'
        }
    }
}


