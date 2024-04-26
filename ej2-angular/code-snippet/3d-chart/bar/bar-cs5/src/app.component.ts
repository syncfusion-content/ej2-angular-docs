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
        <e-chart3d-series [dataSource]='dataSource' type='Bar' xName='x' yName='y' fill="blue" opacity=0.5>
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
            { x: 2005, y: 28 }, { x: 2006, y: 25 },
            { x: 2007, y: 26 }, { x: 2008, y: 27 },
            { x: 2009, y: 32 }, { x: 2010, y: 35 },
            { x: 2011, y: 30 }
        ];
        this.primaryXAxis = {
            valueType: "Category"
        };
        this.enableRotation = true;
        this.primaryYAxis = { };
    }
}


