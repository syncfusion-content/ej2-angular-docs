import { Chart3DAllModule } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';

@Component({
    imports: [Chart3DAllModule],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-chart3d style='display:block;' align='center' [tooltip]="tooltip" [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
    rotation=7 tilt=10 depth=100 [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' [dataLabel]="datalabel" type='Column' xName='x' yName='y' name='Sales'>
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent implements OnInit {
    public dataSource?: Object[];
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public enableRotation?: boolean;
    public title?: string;
    public legendSettings?: Object;
    public datalabel?: Object;
    public tooltip?: Object;
    ngOnInit(): void {
        this.dataSource = [
            { x: 'Tesla', y: 137429 }, { x: 'Aion', y: 80308 },
            { x: 'Wuling', y: 76418 }, { x: 'Changan', y: 52849 },
            { x: 'Geely', y: 47234 }, { x: 'Nio', y: 31041 },
            { x: 'Neta', y: 22449 }, { x: 'BMW', y: 18733 }];
        this.primaryXAxis = {
            valueType: 'Category',
            labelRotation: -45,
            labelPlacement: 'BetweenTicks'
        };
        this.primaryYAxis = {
            maximum: 150000,
            interval: 50000
        };
        this.enableRotation = true;
        this.title = 'Top Selling Electric Cars in China';
        this.legendSettings = { visible: true };
        this.datalabel = {
            visible: true
        };
        this.tooltip = { enable: true };
    }
}
