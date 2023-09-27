


import { Component, ViewEncapsulation } from '@angular/core';
import { HeatMap, ITooltipEventArgs } from '@syncfusion/ej2-heatmap';

@Component({
    selector: 'my-app',
    template:
       `<ejs-heatmap id='container' style="display:block;" [dataSource]='dataSource' [dataSourceSettings]='dataSourceSettings' [xAxis]='xAxis' [yAxis]='yAxis'
       [cellSettings]='cellSettings' [titleSettings]='titleSettings' [paletteSettings]='paletteSettings'>
        </ejs-heatmap>`
})
export class AppComponent{

        titleSettings: Object = {
            text: 'Most Visited Destinations by International Tourist Arrivals',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'Segoe UI'
            }
        };
        xAxis: Object = {
            labels: ['Austria', 'China', 'France', 'Germany', 'Italy', 'Mexico', 'Spain', 'Thailand', 'UK', 'USA'],
        };
        yAxis: Object = {
            labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016'],
        };
        dataSource: Object[] = [
        { 'Labels':{'Xlabel': 'France','Ylabel': '2010' },'data':{'value': '77.6' }},
{ 'Labels':{'Xlabel': 'France','Ylabel': '2011'},'data':{'value': '79.4'}},
{ 'Labels':{'Xlabel': 'France','Ylabel': '2012'},'data':{'value': '80.8'}},
{ 'Labels':{'Xlabel': 'France','Ylabel': '2013'},'data':{'value': '86.6'}},
{ 'Labels':{'Xlabel': 'France','Ylabel': '2014'},'data':{'value': '83.7'}},
{ 'Labels':{'Xlabel': 'France','Ylabel': '2015'},'data':{'value': '84.5'}},
{ 'Labels':{'Xlabel': 'France','Ylabel': '2016'},'data':{'value': '82.6'}},
{ 'Labels':{'Xlabel': 'USA','Ylabel': '2010'},'data':{'value': '60.6'}},
{ 'Labels':{'Xlabel': 'USA','Ylabel': '2011'},'data':{'value': '65.4'}},
{ 'Labels':{'Xlabel': 'USA','Ylabel': '2012'},'data':{'value': '70.8'}},
{ 'Labels':{'Xlabel': 'USA','Ylabel': '2013'},'data':{'value': '73.8'}},
{ 'Labels':{'Xlabel': 'USA','Ylabel': '2014'},'data':{'value': '75.3'}},
{ 'Labels':{'Xlabel': 'USA','Ylabel': '2015'},'data':{'value': '77.5'}},
{ 'Labels':{'Xlabel': 'USA','Ylabel': '2016'},'data':{'value': '77.6'}},
{ 'Labels':{'Xlabel': 'Spain','Ylabel': '2010'},'data':{'value': '64.9'}},
{ 'Labels':{'Xlabel': 'Spain','Ylabel': '2011'},'data':{'value': '52.6'}},
{ 'Labels':{'Xlabel': 'Spain','Ylabel': '2012'},'data':{'value': '60.8'}},
{ 'Labels':{'Xlabel': 'Spain','Ylabel': '2013'},'data':{'value': '65.6'}},
{ 'Labels':{'Xlabel': 'Spain','Ylabel': '2014'},'data':{'value': '52.6'}},
{ 'Labels':{'Xlabel': 'Spain','Ylabel': '2015'},'data':{'value': '68.5'}},
{ 'Labels':{'Xlabel': 'Spain','Ylabel': '2016'},'data':{'value': '75.6'}},
{ 'Labels':{'Xlabel': 'China','Ylabel': '2010'},'data':{'value': '55.6'}},
{ 'Labels':{'Xlabel': 'China','Ylabel': '2011'},'data':{'value': '52.3'}},
{ 'Labels':{'Xlabel': 'China','Ylabel': '2012'},'data':{'value': '54.8'}},
{ 'Labels':{'Xlabel': 'China','Ylabel': '2013'},'data':{'value': '51.1'}},
{ 'Labels':{'Xlabel': 'China','Ylabel': '2014'},'data':{'value': '55.6'}},
{ 'Labels':{'Xlabel': 'China','Ylabel': '2015'},'data':{'value': '56.9'}},
{ 'Labels':{'Xlabel': 'China','Ylabel': '2016'},'data':{'value': '59.3'}},
{ 'Labels':{'Xlabel': 'Italy','Ylabel': '2010'},'data':{'value': '43.6'}},
{ 'Labels':{'Xlabel': 'Italy','Ylabel': '2011'},'data':{'value': '43.2'}},
{ 'Labels':{'Xlabel': 'Italy','Ylabel': '2012'},'data':{'value': '55.8'}},
{ 'Labels':{'Xlabel': 'Italy','Ylabel': '2013'},'data':{'value': '50.1'}},
{ 'Labels':{'Xlabel': 'Italy','Ylabel': '2014'},'data':{'value': '48.5'}},
{ 'Labels':{'Xlabel': 'Italy','Ylabel': '2015'},'data':{'value': '50.7'}},
{ 'Labels':{'Xlabel': 'Italy','Ylabel': '2016'},'data':{'value': '52.4'}},
{ 'Labels':{'Xlabel': 'UK','Ylabel': '2010'},'data':{'value': '28.2'}},
{ 'Labels':{'Xlabel': 'UK','Ylabel': '2011'},'data':{'value': '31.6'}},
{ 'Labels':{'Xlabel': 'UK','Ylabel': '2012'},'data':{'value': '29.8'}},
{ 'Labels':{'Xlabel': 'UK','Ylabel': '2013'},'data':{'value': '33.1'}},
{ 'Labels':{'Xlabel': 'UK','Ylabel': '2014'},'data':{'value': '32.6'}},
{ 'Labels':{'Xlabel': 'UK','Ylabel': '2015'},'data':{'value': '34.4'}},
{ 'Labels':{'Xlabel': 'UK','Ylabel': '2016'},'data':{'value': '35.8'}},
{ 'Labels':{'Xlabel': 'Germany','Ylabel': '2010'},'data':{'value': '26.8'}},
{ 'Labels':{'Xlabel': 'Germany','Ylabel': '2011'},'data':{'value': '29' }},
{ 'Labels':{'Xlabel': 'Germany','Ylabel': '2012'},'data':{'value': '26.8'}},
{ 'Labels':{'Xlabel': 'Germany','Ylabel': '2013'},'data':{'value': '27.6'}},
{ 'Labels':{'Xlabel': 'Germany','Ylabel': '2014'},'data':{'value': '33' }},
{ 'Labels':{'Xlabel': 'Germany','Ylabel': '2015'},'data':{'value': '35' }},
{ 'Labels':{'Xlabel': 'Germany','Ylabel': '2016'},'data':{'value': '35.6'}},
{ 'Labels':{'Xlabel': 'Mexico','Ylabel': '2010'},'data':{'value': '23.2'}},
{ 'Labels':{'Xlabel': 'Mexico','Ylabel': '2011'},'data':{'value': '24.9'}},
{ 'Labels':{'Xlabel': 'Mexico','Ylabel': '2012'},'data':{'value': '30.1'}},
{ 'Labels':{'Xlabel': 'Mexico','Ylabel': '2013'},'data':{'value': '22.2'}},
{ 'Labels':{'Xlabel': 'Mexico','Ylabel': '2014'},'data':{'value': '29.3'}},
{ 'Labels':{'Xlabel': 'Mexico','Ylabel': '2015'},'data':{'value': '32.1'}},
{ 'Labels':{'Xlabel': 'Mexico','Ylabel': '2016'}, 'data':{'value': '35' }},
{ 'Labels':{'Xlabel': 'Thailand','Ylabel': '2010'},'data':{'value': '15.9'}},
{ 'Labels':{'Xlabel': 'Thailand','Ylabel': '2011'},'data':{'value': '19.8'}},
{ 'Labels':{'Xlabel': 'Thailand','Ylabel': '2012'},'data':{'value': '21.8'}},
{ 'Labels':{'Xlabel': 'Thailand','Ylabel': '2013'},'data':{'value': '23.5'}},
{ 'Labels':{'Xlabel': 'Thailand','Ylabel': '2014'},'data':{'value': '24.8'}},
{ 'Labels':{'Xlabel': 'Thailand','Ylabel': '2015'},'data':{'value': '29.9'}},
{ 'Labels':{'Xlabel': 'Thailand','Ylabel': '2016'},'data':{'value': '32.6'}},
{ 'Labels':{'Xlabel': 'Austria','Ylabel': '2010'},'data':{'value': '22' }},
{ 'Labels':{'Xlabel': 'Austria','Ylabel': '2011'},'data':{'value': '21.3'}},
{ 'Labels':{'Xlabel': 'Austria','Ylabel': '2012'},'data':{'value': '24.2'}},
{ 'Labels':{'Xlabel': 'Austria','Ylabel': '2013'},'data':{'value': '23.2'}},
{ 'Labels':{'Xlabel': 'Austria','Ylabel': '2014'},'data':{'value': '25' }},
{ 'Labels':{'Xlabel': 'Austria','Ylabel': '2015'},'data':{'value': '26.7' }},
{ 'Labels':{'Xlabel': 'Austria','Ylabel': '2016'},'data':{'value': '28.1' }}
    ];
        dataSourceSettings: Object = {
            isJsonData: true,
            adaptorType: 'Cell',
            xDataMapping: 'Labels.Xlabel',
            yDataMapping: 'Labels.Ylabel',
            valueMapping: 'data.value'
        };
         cellSettings: Object = {
            border: {
                radius: 4,
                width: 1,
                color: 'white'
            },
            showLabel: true,
            format: '{value} M',
        };
         paletteSettings: Object = {
            palette: [{ color: '#DCD57E' },
            { color: '#A6DC7E' },
            { color: '#7EDCA2' },
            { color: '#6EB5D0' }
            ],
        };
}



