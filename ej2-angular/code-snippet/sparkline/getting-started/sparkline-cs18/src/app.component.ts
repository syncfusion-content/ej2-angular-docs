


import { Component } from '@angular/core';
import { TooltipSettingsModel } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='150px' height='150px'  [dataSource]="data" enableRtl= true
    >
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [0, 6, 4, 1, 3, 2, 5] as any;   
}



