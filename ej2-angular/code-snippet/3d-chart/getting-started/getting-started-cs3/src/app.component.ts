import { Chart3DAllModule } from '@syncfusion/ej2-angular-charts';
import { Component } from '@angular/core';

@Component({
    imports: [Chart3DAllModule],
    standalone: true,
    selector: 'app-container',
    // specifies the template string for the Chart component
    template: `<ejs-chart3d style='display:block;' align='center' [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
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
    public primaryYAxis?: Object;
    public enableRotation?: boolean;
    public title?: string;
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
    }
}
