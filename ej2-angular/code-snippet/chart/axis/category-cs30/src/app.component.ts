

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
     `<ejs-chart id="chart-container" [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
         [legendSettings]='legend'>
            <e-series-collection>
                <e-series [dataSource]='data' type='Column' xName='x' yName='y' name='Years' [marker]='marker'>
                </e-series>
           </e-series-collection>
       </ejs-chart>`
       })

 export class AppComponent {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public data?: Object[];
    public marker?: Object;
    public legend?: Object;
    public title?: string

    ngOnInit(): void {
    this.primaryXAxis = {
        valueType: 'Category',
        title: 'Years',
        opposedPosition: true,
        isInversed: true
    };

    this.primaryYAxis = {
        title: 'Exchange rate (INR per USD)',
        edgeLabelPlacement: 'Shift',
        labelIntersectAction: 'Rotate45',
        isInversed: true
    };

    this.data= [
        { x: 2008, y: 15.1 }, { x: 2009, y: 16 }, { x: 2010, y: 21.4 },
        { x: 2011, y: 18 }, { x: 2012, y: 16.2 }, { x: 2013, y: 11 },
        { x: 2014, y: 7.6 }, { x: 2015, y: 1.5 }
        ];

    this.marker = {
        dataLabel: {
            visible: true
        }
    };

    this.legend = {
        visible: true
    };

    this.title= 'Exchange Rate';
    }

}



