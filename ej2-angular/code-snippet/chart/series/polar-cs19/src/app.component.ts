

import { Component, OnInit } from '@angular/core';
import { columnData } from './datasource';

@Component({
    selector: 'app-container',
    template: ` <ejs-chart id='chartcontainer' [primaryXAxis]='primaryXAxis' [primaryYAxis]='primaryYAxis'
            [title]='title' >
            <e-series-collection>
                <e-series [dataSource]='data' type='Polar' xName='country' yName='gold' drawType='Column' pointColorMapping='color' name='Gold'> </e-series>
            </e-series-collection>
    </ejs-chart>`
})
export class AppComponent implements OnInit {
    public primaryXAxis?: Object;
    public title?: string;
    public data?: Object[];
    ngOnInit(): void {
        this.data = [{ country: "USA", gold: 60, color: 'url(#chess)'},
      { country: "China", gold: 50, color:  'url(#cross)'},
      { country: "Japan", gold: 80, color: 'url(#circle)'},
      { country: "Australia", gold: 70, color:  'url(#rectangle)'},
      { country: "France", gold: 60,  color: 'url(#line)'},
      { country: "Germany", gold: 50, color: 'url(#circle)' },
      { country: "Sweden", gold: 40, color: 'url(#rectangle)'}];
        this.primaryXAxis = {
            valueType: 'Category',
            title: 'Countries'
        };
        this.title = 'Olympic Medals';
    }
}



