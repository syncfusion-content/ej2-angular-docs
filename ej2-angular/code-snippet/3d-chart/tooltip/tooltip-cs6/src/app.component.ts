import { Chart3DAllModule} from '@syncfusion/ej2-angular-charts'
import { Component } from '@angular/core';

@Component({
imports: [ Chart3DAllModule ],
standalone: true,
    selector: 'app-container',
    // specifies the template string for the Chart component
    template: `<ejs-chart3d id="chart3d" align='center' [primaryXAxis]="primaryXAxis" [tooltip]="tooltip" 
    [rotation]="rotation" [tilt]="tilt" [depth]="depth" [enableRotation]='enableRotation' [wallColor]="wallColor">
        <e-chart3d-series-collection>
            <e-chart3d-series [dataSource]="chartData" xName="month" yName="sales" type="Column" name="Month"></e-chart3d-series>
        </e-chart3d-series-collection>
</ejs-chart3d>`
})

export class AppComponent {

  public chartData: Object[] = [
    { month: new Date(2024, 0, 1), sales: 35 },
    { month: new Date(2024, 1, 1), sales: 28 },
    { month: new Date(2024, 2, 1), sales: 34 },
    { month: new Date(2024, 3, 1), sales: 32 },
    { month: new Date(2024, 4, 1), sales: 40 },
    { month: new Date(2024, 5, 1), sales: 32 },
    { month: new Date(2024, 6, 1), sales: 35 },
    { month: new Date(2024, 7, 1), sales: 55 },
    { month: new Date(2024, 8, 1), sales: 38 },
    { month: new Date(2024, 9, 1), sales: 30 },
    { month: new Date(2024, 10, 1), sales: 25 },
    { month: new Date(2024, 11, 1), sales: 32 }
  ];

  public tooltip = {
    enable: true,
    header: 'Unemployment',
    format: '<b>${series.name}</b><br>${point.x:MMM yyyy} : ${point.y:n2}'
  };

  public primaryXAxis = {
    valueType: 'DateTime',
    labelRotation: -45,
    labelPlacement: 'BetweenTicks'
  };

  public series = [
    {
      dataSource: this.chartData,
      xName: 'month',
      yName: 'sales',
      type: 'Column',
      name: 'Month'
    }
  ];

  public rotation: number = 7;
  public tilt: number = 10;
  public depth: number = 100;
  public enableRotation: boolean = true;
  public wallColor: string = 'transparent';
}
