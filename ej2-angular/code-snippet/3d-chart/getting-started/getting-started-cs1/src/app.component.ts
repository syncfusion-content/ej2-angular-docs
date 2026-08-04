import { Chart3DModule } from '@syncfusion/ej2-angular-charts';
import { Component } from '@angular/core';

@Component({
    imports: [Chart3DModule],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the 3D Chart component
    template: `<ejs-chart3d id='chart3d-container'></ejs-chart3d>`
})
export class AppComponent {

}
