import { data } from './datasource';
import { Component, OnInit } from '@angular/core';
import { GridModule, GroupService, GroupSettingsModel, InfiniteScrollService, LazyLoadGroupService, PageService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [GridModule],
    providers: [PageService, LazyLoadGroupService, GroupService, InfiniteScrollService ],
    standalone: true,
    selector: 'app-root',
    template: ` 
    <ejs-grid [dataSource]='data' [allowPaging]='true' [allowGrouping]='true' [groupSettings]='groupSettings' height='242px'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='90'></e-column>
            <e-column field='ProductName' headerText='Product Name' width='100'></e-column>
            <e-column field='ProductID' headerText='Product ID' textAlign='Right' width='80'></e-column>
            <e-column field='CustomerName' headerText='Customer Name' width='120'></e-column>
        </e-columns>
    </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupSettings?: GroupSettingsModel = { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] };
    
    ngOnInit(): void {
        this.data = data;
    }
}
