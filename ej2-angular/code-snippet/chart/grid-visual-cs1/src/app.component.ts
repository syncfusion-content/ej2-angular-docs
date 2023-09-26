

import { Component, ViewChild } from '@angular/core';
import {
  AccumulationChartComponent,
  IMouseEventArgs,
  IAccTextRenderEventArgs,
  AccumulationChart,
} from '@syncfusion/ej2-angular-charts';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { getElement } from '@syncfusion/ej2-charts';

/**
 * Sample for Drilldown in Pie chart
 */
@Component({
  selector: 'app-container',
  template: `<ejs-accumulationchart id="container" #pie style='display:block; width: 92%' [legendSettings]="legendSettings"
            [enableSmartLabels]='false' [title]="title" (textRender)="onTextRender($event)"
            (chartMouseClick)="onChartMouseClick($event)" (pointClick)="onPointClick($event)">
            <e-accumulation-series-collection>
                <e-accumulation-series [dataSource]='data' xName='x' yName='y' [startAngle]="startAngle"
                    [endAngle]="endAngle" innerRadius="0%" radius="70%" [dataLabel]="dataLabel" [explode]="explode"
                    explodeOffset='10%' [explodeIndex]='explodeIndex'>
                </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>

        <ejs-grid id='Grid' #grid [dataSource]='data'>
            <e-columns>
                <e-column field='x' headerText='Vehicle' type='string'></e-column>
                <e-column field='y' headerText='Sales' type='string'></e-column>
            </e-columns>
        </ejs-grid>`,
})
export class AppComponent {
  public data = [
    {
      x: 'SUV',
      y: 25,
      z: [
        {
          title: 'Automobile Sales in the SUV Segment',
          x: 'Toyota',
          y: 8,
          z: [
            { x: '2000', y: 20 },
            { x: '2001', y: 30 },
            { x: '2002', y: 40 },
          ],
        },
        { x: 'Ford', y: 12 },
        { x: 'GM', y: 17 },
        { x: 'Renault', y: 6 },
      ],
    },
    {
      x: 'Car',
      y: 37,
      z: [
        { title: 'Automobile Sales in the Car Segment', x: 'Toyota', y: 7 },
        { x: 'Chrysler', y: 12 },
        { x: 'Nissan', y: 9 },
        { x: 'Ford', y: 15 },
      ],
    },
    {
      x: 'Pickup',
      y: 15,
      z: [
        { title: 'Automobile Sales in the Pickup Segment', x: 'Nissan', y: 9 },
        { x: 'Chrysler', y: 4 },
        { x: 'Ford', y: 7 },
        { x: 'Toyota', y: 20 },
      ],
    },
    {
      x: 'Minivan',
      y: 23,
      z: [
        {
          title: 'Automobile Sales in the Minivan Segment',
          x: 'Hummer',
          y: 11,
        },
        { x: 'Ford', y: 5 },
        { x: 'GM', y: 12 },
        { x: 'Chrysler', y: 3 },
      ],
    },
  ];

  @ViewChild('pie')
  public pie?: AccumulationChartComponent | AccumulationChart;

  @ViewChild('grid')
  public grid?: GridComponent;

  public pointIndex: number = -1;
  //Initializing Legend
  public legendSettings: Object = {
    visible: false,
  };
  //Initializing Datalabel
  public dataLabel: Object = {
    visible: true,
    position: 'Inside',
    connectorStyle: { type: 'Curve', length: '5%' },
    font: { size: '14px', color: 'white' },
  };
  public explode: boolean = false;
  public content: string =
    '<div id="back" style="cursor:pointer;padding:3px;width:30px; height:30px;">' +
          '<img src="https://ej2.syncfusion.com/javascript/demos/src/chart/images/back.png" id="back" />';
  public startAngle: number = 0;
  public explodeIndex: number = 2;
  public endAngle: number = 360;
  public title: string = 'Automobile Sales by Category';
  public isparent: boolean = true;
  public onTextRender(args: IAccTextRenderEventArgs): void {
    args.text = args.point.x + ' ' + args.point.y + ' %';
  }
  public onChartMouseClick(args: IMouseEventArgs): void {
    if (args.target.indexOf('back') > -1) {
      if (this.pie?.series[0].name === 'Level 3') {
        this.pie.series[0].dataSource = this.data[this.pointIndex].z;
        this.pie.series[0].name = 'Level 2';
        this.pie.title = this.data[this.pointIndex].z[0].title as any;
        this.pie.series[0].innerRadius = '30%';
        (this.grid as GridComponent ).dataSource = this.pie.series[0].dataSource;
        ((this.grid as GridComponent ).columns[0] as any).headerText = this.data[this.pointIndex].x;
        (this.grid as GridComponent ).refresh();
        this.pie.refresh();
      } else if (this.pie?.series[0].name === 'Level 2') {
        this.pie.series[0].dataSource = this.data;
        this.pie.series[0].name = 'Level 1';
        this.pie.series[0].innerRadius = '0%';
        this.pie.title = 'Automobile Sales by Category';
        this.pie.annotations = null as any;
        this.pie.pointClick = this.onPointClick;
        (this.grid as GridComponent ).dataSource = this.pie.series[0].dataSource;
        ((this.grid as GridComponent ).columns[0] as any).headerText = 'Vehicle';
        (this.grid as GridComponent ).refresh();
        this.pie.refresh();
      }
    }
    (this.grid as GridComponent ).dataSource = this.pie?.series[0].dataSource as any;
  }
  public click(args: IMouseEventArgs | any) {
    if (this.pie?.series[0].name !== 'Level 3') {
      switch (args.pointIndex) {
        case 0:
          this.pie!.series[0].dataSource = (this.data[0].z[0] as any).z;
          this.pie!.title = 'SUV Sales by Years';
          this.pie!.series[0].name = 'Level 3';
          ((this.grid as GridComponent ).columns[0] as any).headerText = 'Year';
          (this.grid as GridComponent ).refresh();
          this.pie?.refresh();
          break;
      }
      (this.grid as GridComponent ).dataSource = this.pie?.series[0].dataSource as any;
    }
  }
  public onPointClick(args: IMouseEventArgs | any) {
    if (
      getElement(
        this.pie?.element.id +
          '_Series_' +
          args.seriesIndex +
          '_Point_' +
          args.pointIndex
      )
    ) {
      this.pie!.series[0].dataSource = this.data[args.pointIndex].z;
      this.pie!.title = this.data[args.pointIndex].z[0].title as any;
      this.pointIndex = args.pointIndex;

      this.pie!.series[0].name = 'Level 2';
      this.pie!.series[0].innerRadius = '30%';
      this.pie!.annotations = [
        {
          content:
            '<div id="back" style="cursor:pointer;padding:3px;width:30px; height:30px;">' +
            '<img src="https://ej2.syncfusion.com/javascript/demos/src/chart/images/back.png" id="back" />',
          region: 'Series',
          x: '50%',
          y: '50%',
        },
      ];
    }
    (this.grid as GridComponent ).dataSource = this.pie?.series[0].dataSource as any;
    ((this.grid as GridComponent ).columns[0] as any).headerText = this.data[args.pointIndex].x;
    (this.grid as GridComponent ).refresh();
    this.pie?.refresh();
  }
  constructor() {
    //code
  }
}


