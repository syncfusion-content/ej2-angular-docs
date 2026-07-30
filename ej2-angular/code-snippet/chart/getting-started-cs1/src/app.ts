import { Component } from '@angular/core';
import { ChartModule } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [ChartModule],
    // specifies the template string for the Chart component
    template: `<ejs-chart id="chart-container"></ejs-chart>`
})
export class App { }
