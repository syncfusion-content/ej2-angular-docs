


import { Component } from '@angular/core';
import { TooltipSettingsModel } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='350px' height='200px' [axisSettings]= 'axisSettings' theme= 'Highcontrast' [dataLabelSettings]= 'dataLabelSettings' [tooltipSettings]= 'tooltipSettings' [border]= 'border'  [dataSource]="data" fill= '#007dd1' type="Line">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [3, 6, 4, 1, 3, 2, 5] as any;
    public dataLabelSettings: object= { visible: ['All']};
    public tooltipSettings: object= {
        trackLineSettings: { visible: true }
    };
    public axisSettings: object= {
        minX: -1, maxX: 7
    };
   public border: object = { color: 'transparent', width: 2 };
}



