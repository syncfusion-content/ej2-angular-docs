import { Component } from '@angular/core';
import { StockChartModule } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [StockChartModule],
    template: `<ejs-stockchart id="stock-chart-container"></ejs-stockchart>`
})
export class AppComponent { }
