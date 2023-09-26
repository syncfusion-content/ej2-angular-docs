


import { Component, OnInit } from '@angular/core';
import { Browser } from '@syncfusion/ej2-base';
@Component({
    selector: 'app-container',
    template: `<ejs-chart id="chart-container" [primaryXAxis]='primaryXAxis'[primaryYAxis]='primaryYAxis' [title]='title'>
        <e-series-collection>
            <e-series [dataSource]='data' type='Bar' xName='x' yName='y' width=2 ></e-series>
        </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public primaryYAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public data: Object[] = [
        { x: 'Germany', y: 72, country: 'GER: 72' },
        { x: 'Russia', y: 103.1, country: 'RUS: 103.1' },
        { x: 'Brazil', y: 139.1, country: 'BRZ: 139.1' },
        { x: 'India', y: 462.1, country: 'IND: 462.1' },
        { x: 'China', y: 721.4, country: 'CHN: 721.4' },
        { x: 'United States<br>Of America', y: 286.9, country: 'USA: 286.9' },
        { x: 'Great Britain', y: 115.1, country: 'GBR: 115.1' },
        { x: 'Nigeria', y: 97.2, country: 'NGR: 97.2' }
    ];
    ngOnInit(): void {
        this.primaryXAxis = {
        title: 'Country',
        valueType: 'Category',
        majorGridLines: { width: 0 },
        enableTrim: false,
        };
        this.primaryYAxis = {
        minimum: 0,
        maximum: 800,
        labelFormat: Browser.isDevice ? '{value}' : '{value}M',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: {
            color: 'transparent'
        }
        };
        this.title = 'Internet Users – 2016';
    }

}


