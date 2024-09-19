import { NgModule, ViewChild, ViewEncapsulation } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule, ToolbarService, SelectionService, EditService } from '@syncfusion/ej2-angular-treegrid'
import { TreeGrid, Selection, Edit, Toolbar, EditSettingsModel, FreezeService } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    imports: [TreeGridModule],
    encapsulation:ViewEncapsulation.None,
    providers: [ToolbarService, SelectionService, EditService, FreezeService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' childMapping='subtasks' height='310' [treeColumnIndex]='0' enableHover='false'>
                 <e-columns>
                    <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                    <e-column field='taskName' headerText='Task Name' width='200' freeze='Left'></e-column>
                    <e-column field='duration' headerText='Duration' width='110' textAlign='Right'></e-column>
                    <e-column field='startDate' headerText='Start Date' width='150' format='yMd' textAlign='Right'></e-column>
                    <e-column field='endDate' headerText='End Date' width='150' format='yMd' textAlign='Right'></e-column>
                    <e-column field='progress' headerText='Progress' width='110' textAlign='Right'></e-column>
                    <e-column field='priority' headerText='Priority' width='110' freeze='Right'></e-column>
                    <e-column field='approved' headerText='Approved' textAlign='Left' width='110'></e-column>
                 </e-columns>
                </ejs-treegrid>`,
    styles:[`
    .e-treegrid .e-leftfreeze.e-freezeleftborder {
        border-right-color: rgb(0, 255, 0);
    }
    
    .e-treegrid .e-rightfreeze.e-freezerightborder {
        border-left-color: rgb(0, 0, 255) !important;
    }`]

})
export class AppComponent implements OnInit {

    public data?: object[];

    ngOnInit(): void {
        this.data = sampleData;
    }
}



