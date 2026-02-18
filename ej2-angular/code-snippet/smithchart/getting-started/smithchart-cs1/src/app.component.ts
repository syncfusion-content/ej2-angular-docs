import { Component } from '@angular/core';
import { SmithchartModule, TooltipRenderService, SmithchartLegendService } from '@syncfusion/ej2-angular-charts';

@Component({
    imports: [SmithchartModule],
    providers: [TooltipRenderService, SmithchartLegendService],
    standalone: true,
    selector: 'app-container',
    // Specifies the template string for the Smith Chart component
    template: `<ejs-smithchart id="smithchart-container" height='350px'></ejs-smithchart>`
})
export class AppComponent {

}


