import { SparklineModule, SparklineTooltipService  } from '@syncfusion/ej2-angular-charts'
import { Component } from '@angular/core';

@Component({
imports: [ SparklineModule],
providers: [SparklineTooltipService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-sparkline id="sparkline" height="200px" width="500px" 
                    [dataSource]="data" xName="x" yName="y" valueType="DateTime" fill="blue" 
                    [axisSettings]="axisSettings" [tooltipSettings]="tooltipSettings">
                </ejs-sparkline>`
})
export class AppComponent { 

    public data: Object[] = [
        { x: new Date(2024, 0, 1), y: 3 },
        { x: new Date(2024, 1, 1), y: 5 },
        { x: new Date(2024, 2, 1), y: 2 },
        { x: new Date(2024, 3, 1), y: 4 },
        { x: new Date(2024, 4, 1), y: 6 }
    ];

    public axisSettings: Object = {
        minY: -1,
        maxY: 8
    };

    public tooltipSettings: Object = {
        visible: true,
        format: '${x:MMM yyyy} : ${y:n2}'
    };

};