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
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y' columnFacet="Cylinder">
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
            { x: 'Czechia', y: 1.11 },
            { x: 'Spain', y: 1.66 }, 
            { x: 'USA', y: 1.56 },
            { x: 'Germany', y: 3.1 },
            { x: 'Russia', y: 1.35 },
            { x: 'Slovakia', y: 1 },
            { x: 'South Korea', y: 3.16 },
            { x: 'France', y: 0.92 }
        ];
        this.primaryXAxis = {
            valueType: "Category"
        };
        this.enableRotation = true;
        this.primaryYAxis = { };
    }
}


