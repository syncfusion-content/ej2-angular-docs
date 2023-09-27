


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
        { Year: '2017', Months: 'Jan-Feb', Accidents: 4, Fatalities: 39 },
        { Year: '2017', Months: 'Mar-Apr', Accidents: 3, Fatalities: 8 },
        { Year: '2017', Months: 'May-Jun', Accidents: 1, Fatalities: 3 },
        { Year: '2017', Months: 'Jul-Aug', Accidents: 1, Fatalities: 10 },
        { Year: '2017', Months: 'Sep-Oct', Accidents: 4, Fatalities: 4 },
        { Year: '2017', Months: 'Nov-Dec', Accidents: 2, Fatalities: 15 },
        { Year: '2016', Months: 'Jan-Feb', Accidents: 4, Fatalities: 28 },
        { Year: '2016', Months: 'Mar-Apr', Accidents: 5, Fatalities: 92 },
        { Year: '2016', Months: 'May-Jun', Accidents: 5, Fatalities: 73 },
        { Year: '2016', Months: 'Jul-Aug', Accidents: 3, Fatalities: 1 },
        { Year: '2016', Months: 'Sep-Oct', Accidents: 3, Fatalities: 4 },
        { Year: '2016', Months: 'Nov-Dec', Accidents: 4, Fatalities: 126 },
        { Year: '2015', Months: 'Jan-Feb', Accidents: 4, Fatalities: 45 },
        { Year: '2015', Months: 'Mar-Apr', Accidents: 5, Fatalities: 152 },
        { Year: '2015', Months: 'May-Jun', Accidents: 0, Fatalities: 0 },
        { Year: '2015', Months: 'Jul-Aug', Accidents: 4, Fatalities: 54 },
        { Year: '2015', Months: 'Sep-Oct', Accidents: 5, Fatalities: 243 },
        { Year: '2015', Months: 'Nov-Dec', Accidents: 2, Fatalities: 45 },
    ];
    dataSourceSettings: Object = {
        isJsonData: true,
        adaptorType: 'Cell',
        xDataMapping: 'Year',
        yDataMapping: 'Months',
        bubbleDataMapping: { size: 'Accidents', color: 'Fatalities' }
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



