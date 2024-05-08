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
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='country' yName='gold' [dataLabel]="dataLabel">
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent {
    public dataSource?: Object[];
    public primaryXAxis?: Object;
    public enableRotation?: boolean;
    public primaryYAxis?: Object;
    public dataLabel?: Object;
    ngOnInit(): void {
        this.dataSource = [
            { country: "USA", gold: 50, silver: 70, bronze: 45 },
            { country: "China", gold: 40, silver: 60, bronze: 55 },
            { country: "Japan", gold: 70, silver: 60, bronze: 50 },
            { country: "Australia", gold: 60, silver: 56, bronze: 40 }
        ];
        this.primaryXAxis = {
            valueType: "Category"
        };
        this.enableRotation = true;
        this.primaryYAxis = { };
        this.dataLabel = {
            visible: true,
            format: 'n2'
        }
    }
}


