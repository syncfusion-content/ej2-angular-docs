

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Column' xName='x' yName='y' name='Tiger' width=2 [marker]='marker' [cornerRadius]='radius'
             [pointColorMapping]='pointColorMapping'></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public primaryYAxis?: Object;
    public data?: Object[];
    public pointColorMapping?:string;
    public radius?: Object;
    marker: any;
    ngOnInit(): void {
        this.data =  [
                    { x: 'BGD', y: 106, text: 'Bangaladesh', color: 'url(#chess)' },
                    { x: 'BTN', y: 103, text: 'Bhutn', color: 'url(#cross)'  },
                    { x: 'NPL', y: 198, text: 'Nepal', color: 'url(#circle)'  },
                    { x: 'THA', y: 189, text: 'Thiland', color: 'url(#rectangle)' },
                    { x: 'MYS', y: 250, text: 'Malaysia', color: 'url(#line)' }
                ];
        this.primaryXAxis = {
          valueType: 'Category', interval: 1, majorGridLines: { width: 0 }
            };
       this.primaryYAxis = {
          minimum: 0, maximum: 300, interval: 50
            };
       this.radius={ bottomLeft: 15, bottomRight: 15, topLeft: 15, topRight: 15 };
       this.pointColorMapping = 'color';
       this.title = 'Tiger Population - 2016';

    }
}


