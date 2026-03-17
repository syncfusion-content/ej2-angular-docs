import { stringData } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterService, GridComponent, GridModule, GroupService, PageService, SortService } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [ GridModule ],
    providers: [PageService, SortService, FilterService,GroupService],
    standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #Grid [dataSource]='data'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {
  @ViewChild('Grid')
  public grid: GridComponent;
    public data!: object[];
    ngOnInit(): void {
        this.data = stringData;
    }
}