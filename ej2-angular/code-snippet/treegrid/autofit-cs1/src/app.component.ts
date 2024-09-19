import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { formatData } from './datasource';

@Component({
    imports: [TreeGridModule,],
    providers: [PageService, SortService, FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='250' [treeColumnIndex]='1' childMapping='subtasks' allowResizing= 'true' width= '850' (load) ="load()">
                <e-columns>
                    <e-column field='orderID' headerText='Order ID' textAlign='Right' minWidth='100' width='150' maxWidth='200'></e-column>
                    <e-column field='orderName' headerText='Order Name' textAlign='Left' minWidth='100' width='150' maxWidth='200'></e-column>
                    <e-column field='orderDate' headerText='Order Date' textAlign='Right'  minWidth='100' width='150' maxWidth='200' format='yMd'></e-column>
                    <e-column field='price' headerText='Price' textAlign='Right' format='c2' type='number' minWidth='100' width='150' maxWidth='200'></e-column>
                </e-columns>
              </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
    public data?: Object[];

    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
    ngOnInit(): void {
        this.data = formatData;
    }
    load(): void {
        (this.treeGridObj as TreeGridComponent).grid.autoFit = true;
    }
}
