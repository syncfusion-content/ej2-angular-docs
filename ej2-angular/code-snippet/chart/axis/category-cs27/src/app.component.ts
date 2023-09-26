

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-chart id='chartcontainer' [selectionMode]="selectionMode" [chartArea]='chartArea' [title]='title' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis' [legendSettings]='legendSettings'>
    <e-series-collection>
        <e-series [dataSource]='chartData' type='Column' xName='x' yName='y' name='USA' [animation]='animation' [cornerRadius]='cornerRadius'> </e-series>
    </e-series-collection>
    <e-rangecolorsettings>
        <e-rangecolorsetting label="1°C to 10°C" start=1 end=10 [colors]="colors1"></e-rangecolorsetting>
        <e-rangecolorsetting label="11°C to 20°C" start=11 end=20 [colors]="colors2"></e-rangecolorsetting>
        <e-rangecolorsetting label="21°C to 30°C" start=21 end=30 [colors]="colors3"></e-rangecolorsetting>
    </e-rangecolorsettings>
</ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public chartData?: Object[];
    public title?: string;
    public primaryYAxis?: Object;
    public colors1?: string[];
    public colors2?: string[];
    public colors3?: string[];
    public selectionMode?: string;
    public cornerRadius?: Object;
    public chartArea?: Object;
    public legendSettings?: Object;
    public animation?: Object;
    ngOnInit(): void {
        this.chartData = [
            { x: "Jan", y: 6.96 },
            { x: "Feb", y: 8.9 },
            { x: "Mar", y: 12 },
            { x: "Apr", y: 17.5 },
            { x: "May", y: 22.1 },
            { x: "June", y: 25 },
            { x: "July", y: 29.4 },
            { x: "Aug", y: 29.6 },
            { x: "Sep", y: 25.8 },
            { x: "Oct", y: 21.1 },
            { x: "Nov", y: 15.5 },
            { x: "Dec", y: 9.9 }
        ];
        this.primaryXAxis = {
            valueType: 'Category', majorGridLines: { width: 0 }, title: 'Months'
        };
        this.primaryYAxis = {
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            labelFormat: '{value}°C',
            title: 'Temperature'
        };
        this.colors1 = ['#FFFF99'];
        this.colors2 = ['#FFA500'];
        this.colors3 = ['#FF4040'];
        this.selectionMode = "Point";
        this.title = 'USA CLIMATE - WEATHER BY MONTH';
        this.chartArea = {
            border: {
                width: 0
            }
        };
        this.cornerRadius = {
            topLeft: 10, topRight: 10
        };
        this.legendSettings = {
            mode: 'Range'
        };
        this.animation = {
            enable: false
        };
    }

}


