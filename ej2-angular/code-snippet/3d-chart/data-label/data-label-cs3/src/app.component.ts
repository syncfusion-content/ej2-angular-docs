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
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y' [dataLabel]="dataLabel">
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
            { x: 'Jan', y: 12, text: 'January : 12°C' },
            { x: 'Feb', y: 8, text: 'February : 8°C' },
            { x: 'Mar', y: 11, text: 'March : 11°C' },
            { x: 'Apr', y: 6, text: 'April : 6°C' }
        ];
        this.primaryXAxis = {
            valueType: "Category"
        };
        this.enableRotation = true;
        this.primaryYAxis = { };
        this.dataLabel = {
            visible: true,
            name: "text"
        }
    }
}


