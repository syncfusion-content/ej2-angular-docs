import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { Chart3DAllModule} from '@syncfusion/ej2-angular-charts'


import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { Component, ViewChild } from '@angular/core';

@Component({
imports: [
         Chart3DAllModule
    ],


standalone: true,
    selector: 'app-container',
    // specifies the template string for the Chart component
    template: `<button ej-button id='print' (click)='export()'>Export</button>
    <ejs-chart3d #chart id="chart3D" style='display:block;' align='center' [primaryXAxis]='primaryXAxis'
    rotation=7 tilt=10 depth=100 [enableExport]='enableExport' [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='country' yName='gold' name="Gold">
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='country' yName='silver' name="Silver">
        </e-chart3d-series>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='country' yName='bronze' name="Bronze">
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent {
    public dataSource?: Object[];
    public primaryXAxis?: Object;
    public enableRotation?: boolean;
    public enableExport?: boolean;
    @ViewChild('chart')
    public chartObj?: ChartComponent;
    ngOnInit(): void {
        this.dataSource = [
            { country: "USA", gold: 50, silver: 70, bronze: 45 },
            { country: "China", gold: 40, silver: 60, bronze: 55 },
            { country: "Japan", gold: 70, silver: 60, bronze: 50 },
            { country: "Australia", gold: 60, silver: 56, bronze: 40 },
            { country: "France", gold: 50, silver: 45, bronze: 35 },
            { country: "Germany", gold: 40, silver: 30, bronze: 22 },
            { country: "Italy", gold: 40, silver: 35, bronze: 37 },
            { country: "Sweden", gold: 30, silver: 25, bronze: 27 }
        ];
        this.primaryXAxis = {
            valueType: 'Category',
            labelRotation: -45,
            labelPlacement: 'BetweenTicks'
        };
        this.enableRotation = true;
        this.enableExport = true;
    }
    export() {
        var chart = (document.getElementById("chart3D") as any).ej2_instances[0];
        chart.export("PNG", "Charts");
    }
}


