

import { Component, OnInit } from '@angular/core';
import { chartData } from './datasource';
import { L10n, setCulture  } from '@syncfusion/ej2-base';
setCulture('ar-AR');
L10n.load({
    'ar-AR': {
        'chart': {
            ZoomIn: 'تكبير',
            ZoomOut: 'تصغير',
            Zoom: 'زوم',
            Pan: 'مقلاة',
            Reset: 'إعادة تعيين',
            ResetZoom: ' زومإعادة تعيين'
        },
    }
});

@Component({
  selector: 'app-container',
  template: `<ejs-stockchart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis'
        [crosshair]='crosshair' [zoomSettings]="zoomSettings" locale='ar-AR'>
        <e-stockchart-series-collection>
            <e-stockchart-series [dataSource]='chartData' type='Spline' xName='x' yName='open' [marker]='marker'></e-stockchart-series>
        </e-stockchart-series-collection>
    </ejs-stockchart>`
})

export class AppComponent implements OnInit {
  public chartData?: Object[];
  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
  public crosshair?: Object;
  public zoomSettings?: Object;
  public marker?: Object;
  ngOnInit(): void {
    this.chartData = chartData;
    this.primaryXAxis = {
      valueType: 'DateTime',
      majorGridLines: { color: 'transparent' }, crosshairTooltip: { enable: true }
    };
    this.primaryYAxis = {
      lineStyle: { color: 'transparent' },
      majorTickLines: { color: 'transparent', width: 0 },
      crosshairTooltip: { enable: true }
    };
    this.zoomSettings = {
      enableMouseWheelZooming: true,
      mode: 'XY'
    };
    this.crosshair = { enable: true };
    this.marker = { visible: true, width: 10, height: 10 };
  }
}


