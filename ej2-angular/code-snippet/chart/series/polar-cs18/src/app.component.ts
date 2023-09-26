

import { Component, OnInit } from '@angular/core';
import { columnData } from './datasource';

@Component({
    selector: 'app-container',
    template: ` <ejs-chart id='chartcontainer' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-annotations>
            <e-annotation  content='<div>Highest Medal Count</div>' coordinateUnits='Pixel' x=250 y=160>
            </e-annotation>
            </e-annotations>
            <e-series-collection>
                <e-series [dataSource]='data' type='Polar' xName='country' yName='gold' drawType='Column' name='Gold'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public data?: Object[];
    ngOnInit(): void {
        this.data = columnData;
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Countries'
        };
        this.title = 'Olympic Medals';

    }
}



