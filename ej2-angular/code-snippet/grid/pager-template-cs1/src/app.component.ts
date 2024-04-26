import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule } from '@syncfusion/ej2-angular-grids'
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids'
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs'

import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { data } from './datasource';
import { PageService,GridComponent, PageSettingsModel } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
imports: [
        
        GridModule,
        NumericTextBoxModule
    ],

providers: [PageService,
                SortService,
                FilterService,
                GroupService],
standalone: true,
    selector: 'app-root',
    template:`
        <ejs-grid #grid [dataSource]='data' [allowPaging]='true'
        [pageSettings]='initialPage'>
            <ng-template #pagerTemplate let-data>
            <div class="e-pagertemplate">
                <div class="col-lg-12 control-section">
                    <div class="content-wrapper">
                    <ejs-numerictextbox format='###.##' step='1' min='1' max='3' value={{data.currentPage}} 
                    (change)='change($event)' width="200px"></ejs-numerictextbox>
                    </div>
                </div>
                <div id="totalPages" class="e-pagertemplatemessage" 
                style="margin-top:5px;margin-left:30px;border: none; display: inline-block ">
                <span class="e-pagenomsg">{{data.currentPage}} of {{data.totalPages}} pages 
                ({{data.totalRecordsCount}} items)</span>
            </div>
            </div>
            </ng-template>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
            </ejs-grid>`,
    providers: [PageService],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
   

    @ViewChild('grid')
    public grid?: GridComponent;
    public data: Object[] = [];
    public initialPage?: PageSettingsModel;
    
    ngOnInit(): void {
        this.data = data;
        this.initialPage = { pageSize: 5 };
    }
    change(args: ChangeEventArgs) {
      this.initialPage = { currentPage: args.value };
  }
}
