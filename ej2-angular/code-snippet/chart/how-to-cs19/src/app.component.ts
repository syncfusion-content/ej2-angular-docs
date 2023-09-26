

import { Component, OnInit, ViewChild } from '@angular/core';
import { IAnnotationRenderEventArgs, Series } from '@syncfusion/ej2-angular-charts';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-chart #chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title' (annotationRender) = 'annotationRender($event)'>
         <e-annotations>
            <e-annotation content='<div id="point1" style="font-size:11px;font-weight:bold;color:gray;fill:gray;"><span>12</span></div>'
               x='Jamesh' y='11' coordinateUnits='Point' region='Series'>
            </e-annotation>
            <e-annotation content='<div id="point1" style="font-size:11px;font-weight:bold;color:gray;fill:gray;"><span>12</span></div>'
               x='Michael' y='10' coordinateUnits='Point' region='Series'>
            </e-annotation>
            <e-annotation content='<div id="point1" style="font-size:11px;font-weight:bold;color:gray;fill:gray;"><span>12</span></div>'
               x='John' y='12' coordinateUnits= 'Point' region='Series'>
            </e-annotation>
        </e-annotations>
        <e-series-collection>
            <e-series [dataSource]='data1' type='StackingColumn' xName='x' yName='y' name='Apple' [marker]='marker'></e-series>
                <e-series [dataSource]='data2' type='StackingColumn' xName='x' yName='y' name='Orange' [marker]='marker'></e-series>
                <e-series [dataSource]='data3' type='StackingColumn' xName='x' yName='y' name='Grapes' [marker]='marker'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public data1?: Object[];
    public data2?: Object[];
    public data3?: Object[];
    public title?: string;
    public marker?: Object;
    public primaryYAxis?: Object;
    public i:number = 0;
    @ViewChild('chart')
    public chart?:ChartComponent;
    public annotationRender(args: IAnnotationRenderEventArgs):void{
          let length = this.chart!.series.length - 1;
          let value = ((this.chart as ChartComponent ).visibleSeries[length] as any).stackedValues.endValues[this.i];
          this.i += (this.i == length) ? -length : 1;
          args.content.children[0].children[0].innerHTML = value.toString();
        }
    ngOnInit(): void {
        this.data1 = [{ x: 'Jamesh', y: 5 }, { x: 'Michael', y: 4 }, { x: 'John', y: 5 }];
        this.data2 = [{ x: 'Jamesh', y: 4 }, { x: 'Michael', y: 3 }, { x: 'John', y: 4 }];
        this.data3 = [{ x: 'Jamesh', y: 1 }, { x: 'Michael', y: 2 }, { x: 'John', y: 2 }];
        this.chart!.primaryXAxis = {
           title: 'Manager',
            valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
            };
        this.marker = { dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600', color: '#ffffff' }}};
        this.title =  'Fruit Consumption';
    }
}


