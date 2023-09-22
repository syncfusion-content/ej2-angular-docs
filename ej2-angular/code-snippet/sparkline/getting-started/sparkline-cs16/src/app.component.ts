


import { Component } from '@angular/core';
import { TooltipSettingsModel } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='400px' height='350px' [dataSource]="data" xName="xval" yName="yval" type="Area"
    [tooltipSettings]="tooltipSettings">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [
        { xval: 1, yval: 20090440 },
        { xval: 2, yval: 20264080 },
        { xval: 3, yval: 20434180 },
        { xval: 4, yval: 21007310 },
        { xval: 5, yval: 21262640 },
        { xval: 6, yval: 21515750 },
        { xval: 7, yval: 21766710 },
        { xval: 8, yval: 22015580 },
        { xval: 9, yval: 22262500 },
        { xval: 10, yval: 22507620 },
    ];
    public tooltipSettings: TooltipSettingsModel = {
        format: '${xval} : ${yval}'
    };
}



