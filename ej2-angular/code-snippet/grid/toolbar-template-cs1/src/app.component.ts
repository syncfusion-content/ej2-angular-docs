import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, ToolbarService, GroupService } from '@syncfusion/ej2-angular-grids'
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations'




import { Component, OnInit, ViewChild } from '@angular/core';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { data } from './datasource';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
imports: [
        
        GridModule,
        ToolbarModule
    ],

providers: [ToolbarService, GroupService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid [dataSource]='data' height='200px' [allowGrouping]='true' [groupSettings]='groupOptions'>
                    <ng-template #toolbarTemplate let-data>
                        <ejs-toolbar (clicked)='clickHandler($event)'>
                            <e-items>
                                <e-item id="collapse" text="Collapse All" prefixIcon="e-chevron-up icon"></e-item>
                                <e-item id="expand" text="Expand All" prefixIcon="e-chevron-down icon"></e-item>
                            </e-items>
                        </ejs-toolbar>
                    </ng-template>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' isPrimaryKey='true' textAlign='Right' width=90></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
                    </e-columns>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: object;

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = data;
        this.groupOptions = { columns: ['CustomerID'] };
    }

    clickHandler(args: ClickEventArgs): void {
        const target = (args.originalEvent.target as HTMLElement).closest('button'); // find clicked button
        if ((target as HTMLElement).id === 'collapse') {
            // collapse all expanded grouped row
            (this.grid as GridComponent).groupModule.collapseAll();
        }
        if ((target as HTMLElement).id === 'expand') {
            // expand all collapsed grouped row
            (this.grid as GridComponent).groupModule.expandAll();
        }
    }
}



