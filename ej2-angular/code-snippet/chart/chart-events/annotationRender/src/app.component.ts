import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  ChartModule,
  CategoryService,
  LineSeriesService,
  LegendService,
  ChartAnnotationService,
  ChartAnnotationSettingsModel,
  IAnnotationRenderEventArgs,
} from '@syncfusion/ej2-angular-charts';

@Component({
  standalone: true,
  selector: 'app-container',
  imports: [ChartModule],
  providers: [
    CategoryService,
    LineSeriesService,
    LegendService,
    ChartAnnotationService,
  ],
  encapsulation: ViewEncapsulation.None,
  template: `
    <ejs-chart
      id='chart-container'
      [primaryXAxis]='primaryXAxis'
      [primaryYAxis]='primaryYAxis'
      [title]='title'
      [annotations]='annotations'
      (annotationRender)='onAnnotationRender($event)'
    >
      <e-series-collection>
        <e-series
          type='Line'
          name='Sales'
          xName='month'
          yName='sales'
          [marker]='{ visible: true }'
          [dataSource]='chartData'>
        </e-series>
      </e-series-collection>
    </ejs-chart>
  `,
})
export class AppComponent implements OnInit {
  public primaryXAxis: object = { valueType: 'Category' };
  public primaryYAxis: object = { labelFormat: '${value}K' };
  public title = 'Sales Analysis';

  public chartData = [
    { month: 'Jan', sales: 35 },
    { month: 'Feb', sales: 28 },
    { month: 'Mar', sales: 34 },
    { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 },
    { month: 'Jun', sales: 32 },
    { month: 'Jul', sales: 35 },
    { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 },
    { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 },
    { month: 'Dec', sales: 32 },
  ];

  // Define an annotation at the peak data point (Aug, 55)
  public annotations: ChartAnnotationSettingsModel[] = [
    {
      content: '<div class="anno">Peak</div>',
      x: 'Aug',
      y: 55,
      coordinateUnits: 'Point',
      region: 'Chart',
    },
  ];

  ngOnInit(): void {
    // no-op
  }

  // Customize or cancel annotation before it renders
  public onAnnotationRender(args: IAnnotationRenderEventArgs): void {
    console.log('Annotation render event was triggered');

    if (args.content instanceof HTMLElement) {
      args.content.style.padding = '4px 8px';
      args.content.style.background = '#ffeb3b';
      args.content.style.color = '#000';
      args.content.style.borderRadius = '4px';
      args.content.style.boxShadow = '0 1px 3px rgba(0,0,0,0.2)';
      args.content.style.fontWeight = '600';
    }

  }
}
