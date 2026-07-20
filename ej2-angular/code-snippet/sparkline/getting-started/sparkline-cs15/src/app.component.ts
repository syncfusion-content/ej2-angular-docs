import { SparklineModule, SparklineTooltipService } from '@syncfusion/ej2-angular-charts';
import { Component } from '@angular/core';

@Component({
    imports: [SparklineModule],
    providers: [SparklineTooltipService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='400px' height='350px' [dataSource]="data" xName="XValue" yName="YValue" type="Area">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [
        { XValue: 1, YValue: 20090440 },
        { XValue: 2, YValue: 20264080 },
        { XValue: 3, YValue: 20434180 },
        { XValue: 4, YValue: 21007310 },
        { XValue: 5, YValue: 21262640 },
        { XValue: 6, YValue: 21515750 },
        { XValue: 7, YValue: 21766710 },
        { XValue: 8, YValue: 22015580 },
        { XValue: 9, YValue: 22262500 },
        { XValue: 10, YValue: 22507620 }
    ];
}
