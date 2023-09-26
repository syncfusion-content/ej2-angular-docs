


import { Component, OnInit } from '@angular/core';
import { datasrc } from './datasource'

@Component({
    selector: 'app-container',
    template: `<ejs-rangenavigator id="rn-container" valueType='DateTime' [value]='value' [navigatorStyleSettings]='navigatorStyle' labelFormat='MMM-yy'>
            <e-rangenavigator-series-collection>
                <e-rangenavigator-series [dataSource]='chartData' type='Area' xName='x' yName='y' width=2>
                </e-rangenavigator-series>
            </e-rangenavigator-series-collection>
        </ejs-rangenavigator>`
})
export class AppComponent implements OnInit {
    public value?: Object[];
    public chartData?: Object[];
    public navigatorStyle?: Object;
    ngOnInit(): void {
        this.value = [new Date('2017-09-01'), new Date('2018-02-01')];
        this.chartData = datasrc;
        this.navigatorStyle = {  unselectedRegionColor: 'skyblue', selectedRegionColor: 'pink' };
    }
}



