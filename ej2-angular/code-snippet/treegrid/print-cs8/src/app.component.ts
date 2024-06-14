import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridComponent, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService,EditService,ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { createElement } from '@syncfusion/ej2-base';

@Component({
    imports: [TreeGridModule ],
    providers: [PageService, SortService, FilterService, EditService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='265' (printComplete)="printComplete()" [enableCollapseAll]=true (beforePrint)='beforePrint($event)' [treeColumnIndex]='1'  childMapping='subtasks' [toolbar]='toolbarOptions'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Print'];
    }
    beforePrint(args:any){
        
        (this.treegrid as TreeGridComponent).expandAll();
        var rows = (this.treegrid as TreeGridComponent).getRows();
        if (rows.length) {
            (args.element as any).ej2_instances[0].getContent().querySelector('tbody').remove();
            var tbody = createElement('tbody');
            var tr=createElement('tr');
            rows = [...rows];
            for (var r = 0; r < rows.length; r++) {
                tbody.appendChild(rows[r]);
            }
            (args.element as any).ej2_instances[0].getContentTable().appendChild(tbody);
        }

    }
    printComplete(){
      
       (this.treegrid as TreeGridComponent).collapseAll();
       (this.treegrid as TreeGridComponent).refresh();
    }
   
}
