

import { Component, OnInit, ViewChild } from '@angular/core';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    template: `
    <div class="e-float-input" style="width: 200px; display: inline-block;">
            <input type="text" class="searchtext"/>
            <span class="e-float-line"></span>
            <label class="e-float-text">Search text</label>
    </div>
    <button ejs-button id='search' (click)='search()'>Search</button>
        <ejs-grid #grid='' [dataSource]='data' height='260px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
            </e-columns>
        </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    @ViewChild('grid') public gridObj?: GridComponent;

    ngOnInit(): void {
        this.data = data;
    }

    search() {
        const searchText: string = (document.getElementsByClassName('searchtext')[0] as any).value;
        (this.gridObj as any).search(searchText);
    }
}



