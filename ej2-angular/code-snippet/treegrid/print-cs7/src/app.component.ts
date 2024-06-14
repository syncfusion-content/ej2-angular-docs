import { NgModule,ViewChild, ViewEncapsulation } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PageSettingsModel, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit, } from '@angular/core';
import { GridComponent, GridModule, PrintEventArgs,  } from '@syncfusion/ej2-angular-grids'
import { sampleData,orderdata } from './datasource';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { Column, ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [TreeGridModule, GridModule],
    encapsulation:ViewEncapsulation.None,
    providers: [PageService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' #treegrid height='265' [allowPaging]='true' pageSettings='pager' [treeColumnIndex]='1'
                    (beforePrint)="beforePrint($event)" childMapping='subtasks' [toolbar]='toolbarOptions'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='progress' headerText='Progress' [visible]='false' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=110></e-column>
                    </e-columns>
                </ejs-treegrid>

                <h4>Grid</h4>
                <ejs-grid #grid [dataSource]='grid_data'>
                    <e-columns>
                        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                    </e-columns>
                </ejs-grid>
                
                `,
   
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public grid_data?: Object[];
    public toolbarOptions?: ToolbarItems[];
    public pager?: PageSettingsModel;
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
    @ViewChild('grid')
    public GridObj?: GridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.grid_data=orderdata;
        this.toolbarOptions = ['Print'];
        this.pager = { pageSize: 6 };
    }
    beforePrint(args: PrintEventArgs) {
        if (this.GridObj) {
            var elem=document.createElement('div');
             // Create a new h2 element
             var newH2 = document.createElement('h2');
             newH2.textContent = 'Grid component';
             elem.appendChild(newH2);

            (args.element as Element).appendChild(elem);
            (args.element as Element).appendChild((this.GridObj as GridComponent).element);
        }
    }
}



