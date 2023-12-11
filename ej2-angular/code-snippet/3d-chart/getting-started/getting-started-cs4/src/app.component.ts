


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart3d style='display:block;' align='center' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
    rotation=7 tilt=10 depth=100 [legendSettings]="legendSettings" [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y' name='Gold'>
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`
})
export class AppComponent implements OnInit {
    public dataSource: Object[] = [
        { x: 'Tesla', y: 137429 },{ x: 'Aion', y: 80308 },
        { x: 'Wuling', y: 76418 }, { x: 'Changan', y: 52849 },
        { x: 'Geely', y: 47234 }, { x: 'Nio', y: 31041 },
        { x: 'Neta', y: 22449 }, { x: 'BMW', y: 18733 }];
    
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'Category',
        labelRotation:  -45,
        labelPlacement: 'BetweenTicks'
    };
    public legendSettings: Object = { visible: true };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        maximum: 150000,
        interval: 50000
    };
    //Initializing 3D-Chart Title
    public enableRotation: boolean = true;

}



