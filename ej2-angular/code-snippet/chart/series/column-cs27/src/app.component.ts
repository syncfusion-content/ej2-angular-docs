

import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from '@syncfusion/ej2-angular-charts';
import { Internationalization, DateFormatOptions } from '@syncfusion/ej2-base';
import { ChangeEventArgs as NumericChange } from '@syncfusion/ej2-inputs';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { IScrollEventArgs, ILoadedEventArgs } from '@syncfusion/ej2-charts';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    selector: 'app-container',
    template: `<ejs-chart style='display:block;' #chart [legendSettings]='legend' id='container' [primaryXAxis]='primaryXAxis'
            [tooltip]='tooltip' [height]='height' [width]='width' (scrollEnd)='scrollEnd($event)'
            [primaryYAxis]='primaryYAxis' [crosshair]='crosshair' [chartArea]='chartArea' [title]='title'>
            <e-series-collection>
                <e-series [dataSource]='data' [animation]='animation' type='Line' xName='x' yName='y'>
                </e-series>
            </e-series-collection>
        </ejs-chart>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
    }
    public intl: Internationalization = new Internationalization();
    @ViewChild('point')
    private pointslength?: NumericTextBoxComponent;
    public value: number = 1000;
    public step: number = 100;
    public enabled: boolean = false;
    public format: string = 'n';
    public dropValue: string = 'Range';
    public minValue: Date = new Date(2009, 0, 1);
    public maxValue: Date = new Date(2014, 0, 1);
    public dropDownData: Object = [
        { value: 'Range' },
        { value: 'Points Length' }

    ];
    public fields: Object = { text: 'value', value: 'value' };
    public data: Object[] = this.GetNumericData(new Date(2009, 0, 1));
    @ViewChild('chart')
    public chart?: ChartComponent;
    // Initializing Primary X Axis
    public primaryXAxis: Object = {
        title: 'Day',
        valueType: 'DateTime',
        edgeLabelPlacement: 'Shift',
        skeleton: 'yMMM',
        skeletonType: 'Date',
        scrollbarSettings: {
            range: {
                minimum: new Date(2009, 0, 1),
                maximum: new Date(2014, 0, 1)
            },
            enable: true,
            pointsLength: 1000
        }
    };
    public height: string = '450';
    public width: string = '100%';
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        title: 'Server Load',
        labelFormat: '{value}MB'
    };
    public tooltip: Object = {
        enable: true, shared: true,
        header : "<b>${point.x}</b>", format : "Server load : <b>${point.y}</b>"
    };
    public legend: Object = {
        visible: false
    };
    public title: string = 'Network Load';
    public animation: Object = { enable: false };
    public chartArea: Object = {
        border: {
            width: 0
        }
    };
crosshair: any;
    public scrollEnd(args: IScrollEventArgs | any): void {
        (this.chart as ChartComponent).series[0].dataSource = this.GetNumericData(new Date(args.currentRange.maximum));
        (this.chart as ChartComponent).dataBind();
    };
    public GetNumericData(date: Date): {x: Date, y: number}[] {
        var series1 = [];
        var value = 30;
        for (var i = 0; i <= 60; i++) {
            if (Math.random() > .5) {
                value += (Math.random() * 10 - 5);
            }
            else {
                value -= (Math.random() * 10 - 5);
            }
            if (value < 0) {
                value = this.getRandomInt(20, 40);
            }
            date = new Date(date.setMinutes(date.getMinutes() + 1));
            var point = { x: date, y: Math.round(value) };
            series1.push(point);
        }
        return series1;
    }
    public getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};



