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
    template: `<ejs-chart3d [primaryXAxis]='primaryXAxis' [primaryYAxis]="primaryYAxis"
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
        this.dataSource = [
            { x: new Date(2000, 6, 11), y: 10 },
            { x: new Date(2002, 3, 7), y: 30 },
            { x: new Date(2004, 3, 6), y: 15 },
            { x: new Date(2006, 3, 30), y: 65 },
            { x: new Date(2008, 3, 8), y: 90 },
            { x: new Date(2010, 3, 8), y: 85 }
        ];
        this.primaryXAxis = {
            valueType: "DateTime"
        };
        this.enableRotation = true;
        this.primaryYAxis = { };
    }
}


