import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, PageService, SelectionService, RowDDService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { RowDragEventArgs } from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [TreeGridAllModule],
    providers: [PageService, SelectionService, RowDDService],
    standalone: true,
    selector: 'app-container',
    encapsulation: ViewEncapsulation.None,
    template: `<ejs-treegrid #treegrid id='TreeGrid'  [dataSource]='sourceData' childMapping='subtasks'  [allowPaging]="true" [pageSettings]="true" [allowSelection]="true" [allowRowDragAndDrop]="true" 
              [selectionSettings]="selectionOptions" [rowDropSettings]="rowDropOptions" >
                <e-columns>
                  <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true'  textAlign='Right' width=90></e-column>
                  <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                  <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                  <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                </e-columns>
            </ejs-treegrid>  `,
    styles: [
        `.e-notallowedcur{
    display:none;
  }`,
    ],
})
export class AppComponent implements OnInit {
    @ViewChild('treegrid')
    treeGridObject!: TreeGridComponent;
    public sourceData: Object[] = [];
    public selectionOptions?: Object;
    public rowDropOptions?: object;

    ngOnInit(): void {
        this.sourceData = sampleData;
        this.selectionOptions = { type: 'Multiple' };
        this.rowDropOptions = { targetID: 'TreeGrid' };
    }
}
