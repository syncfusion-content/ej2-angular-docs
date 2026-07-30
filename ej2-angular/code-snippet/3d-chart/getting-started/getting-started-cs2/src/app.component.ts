import { Component } from '@angular/core';
import {
  Chart3DModule,
  ColumnSeries3DService,
  Tooltip3DService,
  Category3DService,
} from '@syncfusion/ej2-angular-charts';

@Component({
  imports: [Chart3DModule],
  standalone: true,
  selector: 'app-root',
  providers: [ColumnSeries3DService, Tooltip3DService, Category3DService],
  template: `<ejs-chart3d id="chart3d-container" style='display:block;' align='center'
        [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [tooltip]='tooltip'
        rotation=7 tilt=10 depth=100 [enableRotation]='enableRotation'>
    <e-chart3d-series-collection>
        <e-chart3d-series [dataSource]='dataSource' type='Column' xName='x' yName='y'>
        </e-chart3d-series>
    </e-chart3d-series-collection>
</ejs-chart3d>`,
})
export class AppComponent {
  public dataSource: { x: string; y: number }[] = [
    { x: 'Tesla', y: 137429 },
    { x: 'Aion', y: 80308 },
    { x: 'Wuling', y: 76418 },
    { x: 'Changan', y: 52849 },
    { x: 'Geely', y: 47234 },
    { x: 'Nio', y: 31041 },
    { x: 'Neta', y: 22449 },
    { x: 'BMW', y: 18733 },
  ];
  public primaryXAxis: Object = {
    valueType: 'Category',
    labelRotation: -45,
    labelPlacement: 'BetweenTicks',
  };
  public primaryYAxis: Object = {
    maximum: 150000,
    interval: 50000,
  };
  public tooltip: Object = { enable: true };
  public enableRotation: boolean = true;
}
