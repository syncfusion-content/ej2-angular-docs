import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule,PageService, SelectionService, RowDDService } from '@syncfusion/ej2-angular-treegrid'
import {ButtonModule} from '@syncfusion/ej2-angular-buttons'
import { Component, OnInit,  } from '@angular/core';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { sampleData } from './datasource';

@Component({
    imports: [TreeGridAllModule, ButtonModule,],
    providers: [PageService, SelectionService, RowDDService],
    standalone: true,
    selector: 'app-container',
    template: `	<button ejs-button (click)="reorder($event)">Reorder Rows</button>
                <ejs-treegrid id='TreeGrid' #treegrid [dataSource]='data' height='250' [allowRowDragAndDrop]='true' childMapping='subtasks' [treeColumnIndex]='1'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>
    `
})
export class AppComponent implements OnInit {
    public data?: Object[];
     @ViewChild('treegrid')
    public treegridObj?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
    }
    reorder(args: any) {
        (this.treegridObj as TreeGridComponent).reorderRows([1], 3, "below");
        
      }
}