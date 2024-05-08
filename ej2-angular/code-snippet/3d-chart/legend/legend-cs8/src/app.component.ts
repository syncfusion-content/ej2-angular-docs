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
    template: `<ejs-chart3d [primaryXAxis]='primaryXAxis' [primaryYAxis]="primaryYAxis" [legendSettings]="legend"
    rotation=7 tilt=10 depth=100 [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y' name="December 2007">
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y1' name="December 2008" >
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y2' name="December 2009">
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y3' name="December 2010">
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent {
    public dataSource?: Object[];
    public primaryXAxis?: Object;
    public enableRotation?: boolean;
    public legend?: Object;
    public primaryYAxis?: Object;
    ngOnInit(): void {
        this.dataSource = [
            { x: 'WW', y: 12, y1: 22, y2: 38.3, y3: 50 },
            { x: 'EU', y: 9.9, y1: 26, y2: 45.2, y3: 63.6 },
            { x: 'APAC', y: 4.4, y1: 9.3, y2: 18.2, y3: 20.9 },
            { x: 'LATAM', y: 6.4, y1: 28, y2: 46.7, y3: 65.1 },
            { x: 'MEA', y: 30, y1: 45.7, y2: 61.5, y3: 73 },
            { x: 'NA', y: 25.3, y1: 35.9, y2: 64, y3: 81.4 }
        ];
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Countries'
        };
        this.enableRotation = true;
        this.primaryYAxis = { 
            minimum: 0, maximum: 80,
            interval: 20, title: 'Medals'
        };
        this.legend = {
            padding: 10, shapePadding: 10,
            visible: true, border: {
                width: 2, color: 'grey'
            },
            width: '200'
        };
    }
}


