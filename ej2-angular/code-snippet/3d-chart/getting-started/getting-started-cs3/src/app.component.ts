

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    // specifies the template string for the Chart component
    template: `<ejs-chart3d style='display:block;' align='center' [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
    rotation=7 tilt=10 depth=100 [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y' name='Gold'>
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent {
    public title: string = 'Top Selling Electric Cars in China';
}


