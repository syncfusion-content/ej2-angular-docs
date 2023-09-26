

import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-container',
    template: `
    <ejs-chart style='display:block;' [chartArea]='chartArea'  align='center' id='chartcontainer' [title]='title'
            [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'>
            <e-series-collection>
                <e-series [dataSource]='series1' type='Scatter' xName='x' yName='y' opacity='0.6' name='Male' width=2 [marker]='marker1'>
                </e-series>
                <e-series [dataSource]='series2' type='Scatter' xName='x' yName='y' opacity='0.6' name='Female' width=2 [marker]='marker2'>
                </e-series>
            </e-series-collection>
    </ejs-chart>

    `
})
export class AppComponent {
    public chartArea: Object = {
        border: {
            width: 0
        }
    };
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
           minimum: 100,
            maximum: 220,
            majorGridLines: { width: 0 },
            edgeLabelPlacement: 'Shift',
            title: 'Height in Inches'
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
                majorTickLines: {
                    width: 0
                },
                lineStyle: {
                    width: 0
                },
                minimum: 0,
                maximum: 100,
                interval: 10,
                title: 'Weight in Pounds',
                rangePadding: 'None'
    };
    public marker1: Object = {
       visible: false,
       width: 28,
       height: 20,
       shape: 'Rectangle',
       dataLabel: {visible: true, position: 'Inner' }
    };
    public marker2: Object = {
       visible: false,
       width: 12,
       height: 12,
       shape: 'Diamond'
    };
    public title: string = 'Height vs Weight';
    public series1: Object[] = [
    { 'x': 131, 'y': 32, text: '131%' }, { 'x': 140, 'y': 52, text: '140%' }, { 'x': 149, 'y': 82, text: '149%' }, { 'x': 115, 'y': 52, text: '115%' },
    { 'x': 134, 'y': 62, text: '134%' }, { 'x': 183, 'y': 12, text: '183%' }, { 'x': 155, 'y': 32, text: '155%' }, { 'x': 164, 'y': 22, text: '164%' }];
    public series2: Object[] = [
    { 'x': 115, 'y': 67, text: '115%' },
    { 'x': 138, 'y': 87, text: '138%' },
    { 'x': 166, 'y': 37, text: '166%' },
    { 'x': 122, 'y': 27, text: '122%' },
    { 'x': 126, 'y': 47, text: '126%' },
    { 'x': 119, 'y': 18, text: '119%' },
    { 'x': 141, 'y': 88, text: '141%' },
    { 'x': 180, 'y': 78, text: '180%' }
    ];
    constructor() {
        //code
     };
}


