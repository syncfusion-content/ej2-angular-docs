

import { Component } from '@angular/core';
import { TooltipSettingsModel } from '@syncfusion/ej2-angular-charts';


@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='500px' height='200px' [axisSettings]='axisSettings' [tooltipSettings]='tooltipSettings'  fill= '#033e96' valueType= 'Category' [dataSource]="data" xName="x" yName="y">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [{x: 'Mon', y: 3 },{x: 'Tue', y: 5 },{x: 'Wed', y: 2 },{x: 'Thu', y: 4 },{x: 'Fri', y: 6 }];
    public axisSettings: object ={
        minX: -1, maxX: 7, maxY: 8, minY: -1
    };
    public tooltipSettings: object= {
        visible: true,
        format: '${x} : ${y}',
        fill: '#033e96',
        textStyle: {
            color: 'white'
        },
    }
};


