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
    template: `<ejs-chart3d #chart style='display:block;' align='center' [primaryXAxis]='primaryXAxis' [primaryYAxis]="primaryYAxis" [rows]="rows"
    rotation=7 tilt=10 depth=100 [axes]="axes" [enableRotation]='enableRotation'>    
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y'>
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' yAxisName="yAxis" type='Column' xName='x' yName='y1'>
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent {
    public dataSource?: Object[];
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public axes?: Object[];
    public rows?: Object[];
    public enableRotation?: boolean;
    ngOnInit(): void {
        this.dataSource = [
            { x: 'Jan', y: 15, y1: 33 }, { x: 'Feb', y: 20, y1: 31 }, { x: 'Mar', y: 35, y1: 30 },
            { x: 'Apr', y: 40, y1: 28 }, { x: 'May', y: 80, y1: 29 }, { x: 'Jun', y: 70, y1: 30 },
            { x: 'Jul', y: 65, y1: 33 }, { x: 'Aug', y: 55, y1: 32 }, { x: 'Sep', y: 50, y1: 34 },
            { x: 'Oct', y: 30, y1: 32 }, { x: 'Nov', y: 35, y1: 32 }, { x: 'Dec', y: 35, y1: 31 }
        ];
        this.enableRotation = true;
        this.primaryXAxis = {
            title: 'Months',
            valueType: 'Category',
            interval: 1
        };
        this.primaryYAxis = {
            minimum: 0, maximum: 90, interval: 20,
            title: 'Temperature (Fahrenheit)',
            labelFormat: '{value}°F'
        }
        this.axes = [
            {
                majorGridLines: { width: 0 },
                rowIndex: 1, opposedPosition: true,
                minimum: 24, maximum: 36, interval: 4,
                name: 'yAxis', title: 'Temperature (Celsius)',
                labelFormat: '{value}°C'
            }
        ];
        this.rows = [
            {
                height: '50%'
            },{
                height: '50%'
            }
        ]
    }
}


