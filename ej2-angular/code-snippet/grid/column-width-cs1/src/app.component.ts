import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { FilterService, GridModule, GroupService, PageService, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    providers: [ PageService, SortService, FilterService, GroupService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid [dataSource]='data' width='auto'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='auto'></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                    <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=100></e-column>
                    <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width='30%'></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = data;
    }
}
