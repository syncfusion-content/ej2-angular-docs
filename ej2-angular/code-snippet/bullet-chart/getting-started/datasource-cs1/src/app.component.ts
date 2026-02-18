import { Component } from '@angular/core';
import { BulletChartModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [BulletChartModule],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-bulletchart valueField='value' targetField='target'
                [minimum]='minimum' [maximum]='maximum' [interval]='interval' [dataSource]='data'>
                </ejs-bulletchart>`
})
export class AppComponent {
    public minimum: number = 0;
    public maximum: number = 300;
    public interval: number = 50;
    public data: Object[] = [
        { value: 100, target: 80 },
        { value: 200, target: 180 },
        { value: 300, target: 280 },
        { value: 400, target: 380 },
        { value: 500, target: 480 },
    ];
}


