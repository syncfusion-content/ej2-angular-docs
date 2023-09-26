

import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-container',
    template: `<ejs-chart style='display:block;' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'>
	    <e-series-collection>
	        <e-series stackingGroup="A" [dataSource]='data' type='StackingColumn' xName='x' yName='y' name='UK' width='2'> </e-series>
		    <e-series stackingGroup="B" [dataSource]='data1' type='StackingColumn' xName='x' yName='y' name='Germany' width='2'> </e-series>
		    <e-series stackingGroup="A" [dataSource]='data2' type='StackingColumn' xName='x' yName='y' name='France' width='2'> </e-series>
		    <e-series stackingGroup="B" [dataSource]='data3' type='StackingColumn' xName='x' yName='y' name='Italy' width='2'> </e-series>
	    </e-series-collection>
	</ejs-chart>`
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public data1?: Object[];
  public data2?: Object[];
  public data3?: Object[];
  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
    ngOnInit(): void {
        this.primaryXAxis = {
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            interval: 1,
            lineStyle: { width: 0 },
            valueType: "Category"
        };
        this.primaryYAxis = {
            title: "Sales",
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
            labelFormat: "{value}B"
        };
    this.data = [
    { x: "2014", y: 111.1 },
    { x: "2015", y: 127.3 },
    { x: "2016", y: 143.4 },
    { x: "2017", y: 159.9 }
  ];
  this.data1 = [
    { x: "2014", y: 76.9 },
    { x: "2015", y: 99.5 },
    { x: "2016", y: 121.7 },
    { x: "2017", y: 142.5 }
  ];
  this.data2 = [
    { x: "2014", y: 66.1 },
    { x: "2015", y: 79.3 },
    { x: "2016", y: 91.3 },
    { x: "2017", y: 102.4 }
  ];
  this.data3 = [
    { x: "2014", y: 34.1 },
    { x: "2015", y: 38.2 },
    { x: "2016", y: 44.0 },
    { x: "2017", y: 51.6 }
  ];
}

}


