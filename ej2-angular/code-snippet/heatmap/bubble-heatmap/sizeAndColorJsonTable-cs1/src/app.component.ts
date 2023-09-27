


import { Component, ViewEncapsulation } from '@angular/core';
import { BubbleTooltipData, ITooltipEventArgs } from '@syncfusion/ej2-angular-heatmap';

@Component({
    selector: 'my-app',
    template:
        `<ejs-heatmap id='container' style="display:block;" [dataSource]='dataSource' [dataSourceSettings]='dataSourceSettings' [xAxis]='xAxis' [yAxis]='yAxis'
       [titleSettings]='titleSettings' [paletteSettings]='paletteSettings' [cellSettings]='cellSettings' [legendSettings]='legendSettings' (tooltipRender)='tooltipRender($event)'>
        </ejs-heatmap>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {

    dataSource: Object[] = [
        { 'Year': '2017', 'Jan-Feb': [4, 39], 'Mar-Apr': [3, 8], 'May-Jun': [1, 3], 'Jul-Aug': [1, 10], 'Sep-Oct': [4, 4], 'Nov-Dec': [2, 15] },
        { 'Year': '2016', 'Jan-Feb': [4, 28], 'Mar-Apr': [5, 92], 'May-Jun': [5, 73], 'Jul-Aug': [3, 1], 'Sep-Oct': [3, 4], 'Nov-Dec': [4, 126] },
        { 'Year': '2015', 'Jan-Feb': [4, 45], 'Mar-Apr': [5, 152], 'May-Jun': [0, 44], 'Jul-Aug': [4, 54], 'Sep-Oct': [5, 243], 'Nov-Dec': [2, 45] }
    ];
    dataSourceSettings: Object = {
        isJsonData: true,
        adaptorType: 'Table',
        xDataMapping: 'Year',
    };

    titleSettings: Object = {
        text: 'Commercial Aviation Accidents and Fatalities by year 2012 - 2017',
        textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
        }
    };
    xAxis: Object = {
        labels: ['2017', '2016', '2015'],
    };
    yAxis: Object = {
        labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'],
    };
    public paletteSettings: Object = {
        palette: [
            { color: '#C06C84' },
            { color: '#6C5B7B' },
            { color: '#355C7D' }
        ],
        type: "Gradient"
    };
    public cellSettings: Object = {
        border: {
            width: 1
        },
        tileType: 'Bubble',
        bubbleType: 'SizeAndColor'
    };
    public legendSettings: Object = {
        visible: true,
    };
    public tooltipRender(args: ITooltipEventArgs): void {
        args.content = ['Year ' + ' : ' + args.xLabel + '<br/>' + 'Months ' + ' : ' + args.yLabel + '<br/>'
            + 'Accidents ' + ' : ' + (args.value as BubbleTooltipData[])[0].bubbleData + '<br/>' + 'Fatalities ' + ' : '
            + (args.value as BubbleTooltipData[])[1].bubbleData];
    };
}



