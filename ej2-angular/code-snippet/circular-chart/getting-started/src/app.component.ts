import { CircularChart3DAllModule } from '@syncfusion/ej2-angular-charts';
import { Component, OnInit } from '@angular/core';

@Component({
    imports: [CircularChart3DAllModule],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-circularchart3d style='display:block;' align='center' tilt='-45' [title]='title' [legendSettings]="legendSettings">
    <e-circularchart3d-series-collection>
    <e-circularchart3d-series [dataSource]='dataSource' xName='x' yName='y' [dataLabel]='dataLabel'>
    </e-circularchart3d-series></e-circularchart3d-series-collection>
    </ejs-circularchart3d>`
})
export class AppComponent implements OnInit {
    public dataSource?: Object[];
    public title?: string;
    public legendSettings?: Object;
    public dataLabel?: Object;
    ngOnInit(): void {
        this.dataSource = [
            { x: 'Chrome', y: 62.92 },
            { x: 'Internet Explorer', y: 6.12 },
            { x: 'Opera', y: 3.15 },
            { x: 'Edge', y: 5.5 },
            { x: 'Safari', y: 19.97 },
            { x: 'Others', y: 2.34 }];
        this.title = 'Browser Market Shares in November 2023';
        this.legendSettings = { visible: true, position: 'Right' };
        this.dataLabel = {
            visible: true,
            name: 'x',
            position: 'Outside',
            font: {
                fontWeight: '600'
            },
            connectorStyle: { length: '40px' }
        };
    }
}
