

import { Component, OnInit } from '@angular/core';
import { data } from './datasource';
import { ReturnType } from '@syncfusion/ej2-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {

    public data?: object[];
    public ShipCountry = 'ShipCountry';
    ngOnInit(): void {
        this.data = data;
    }
    public customAggregateFn = (sdata: ReturnType) => {
        sdata.result.filter((item: object) => (item as any)[this.ShipCountry] === 'Brazil').length;
    }
}




