


import { Component } from '@angular/core';
import { TooltipSettingsModel } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='350px' height='200px' [containerArea]= 'containerArea' lineWidth= 3 format= 'c0' useGroupingSeparator= 'true' [padding]='padding' [dataSource]="data" fill= '#b2cfff' type="Area"
    [tooltipSettings]="tooltipSettings">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [30000, 60000, 40000, 10000, 30000, 20000, 50000] as any;
    public containerArea: object= {
        border: { color: '#033e96', width: 2 }
    };
    public tooltipSettings: object= {
        visible: true
    };
    public padding: object = { left: 20, right: 20, bottom: 20, top: 20};
    public border: object = { color: '#033e96', width: 2 };
}



