import { Component } from '@angular/core';
import { BulletChartModule } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [BulletChartModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the Bullet Chart component
    template: `<ejs-bulletchart id="chart-container"></ejs-bulletchart>`
})
export class AppComponent {

}


