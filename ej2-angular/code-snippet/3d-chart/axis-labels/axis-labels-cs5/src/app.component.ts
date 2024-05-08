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
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y'>
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent {
    public dataSource?: Object[];
    public primaryXAxis?: Object;
    public enableRotation?: boolean;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        let series1: Object[] = [];
        let point1: Object;
        let value: number = 80;
        let i: number;
        for (i = 1; i < 50; i++) {
            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            point1 = { x: i, y: value.toFixed(1) };
            series1.push(point1);
        }
        this.dataSource = series1;
        this.primaryXAxis = {
            title: 'Years',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 0 },
            maximumLabels: 1,
        };
        this.enableRotation = true;
        this.primaryYAxis = { };
    }
}


