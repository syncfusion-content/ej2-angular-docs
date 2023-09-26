

import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-container',
    template: `<ejs-accumulationchart id="chart-container" [legendSettings]='legendSettings' [title]='title'>
        <e-accumulation-series-collection>
            <e-accumulation-series [dataSource]='piedata' xName='x' yName='y' type='Pie'></e-accumulation-series>
        </e-accumulation-series-collection>
    </ejs-accumulationchart>`
})
export class AppComponent implements OnInit {
    public piedata?: Object[];
    public legendSettings?: Object;
    public title?: string;
    public titleStyle?: Object;
    ngOnInit(): void {
        this.piedata = [{ x: 'Saudi Arabia', y: 58, text: '58%' },
                        { x: 'Persian Gulf', y: 15, text: '15%' },
                        { x: 'Canada', y: 13, text: '13%' },
                        { x: 'Venezuela', y: 8, text: '8%' },
                        { x: 'Mexico', y: 3, text: '3%' },
                        { x: 'Russia', y: 2, text: '2%' },
                        { x: 'Miscellaneous', y: 1, text: '1%' }];
        this.legendSettings = {
            visible: false
        };
        this.title = 'Oil and other liquid imports in USA';
    }

}


