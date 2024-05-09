import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, PageService } from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    imports: [
    TreeGridAllModule, DropDownListAllModule 
    ],
    providers:[PageService],
    standalone: true,
    selector: 'app-container',
    template: `<div style="display: flex">
                    <label style="padding: 30px 17px 0 0;">Select page size mode :</label>
                    <ejs-dropdownlist  style="padding: 26px 0 0 0" index="0" width="100" [dataSource]="Datamode" (change) ="changepagesizemode($event)"></ejs-dropdownlist>
                </div>
                <ejs-treegrid #treegrid [dataSource]='data' height='210' [treeColumnIndex]='1' [allowPaging]='true' [pageSettings]='pageSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public pageSettings?: Object ;
    public Datamode: Object[] = [
        { text: 'Root', value: 'Root' },
        { text: 'All', value: 'All' },
        
    ];
    @ViewChild('treegrid')
    public treegrid?:TreeGridComponent;
    public changepagesizemode(args: ChangeEventArgs): void {
        (this.treegrid as TreeGridComponent).pageSettings.pageSizeMode= args.value as any;
      
    }

    ngOnInit(): void {
        this.data = sampleData;
        this.pageSettings = {pageSize: 2, pageSizeMode: 'Root'};
    }
}