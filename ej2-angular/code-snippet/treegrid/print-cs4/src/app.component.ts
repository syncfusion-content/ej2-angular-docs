import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SelectionSettingsModel, TreeGridComponent, TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, ToolbarService, ToolbarItems } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import {  PrintEventArgs } from '@syncfusion/ej2-angular-grids';
import { createElement } from '@syncfusion/ej2-base';

@Component({
    imports: [ TreeGridModule ],
    providers: [PageService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='220' [selectionSettings]="selectionSettings" (beforePrint)='beforePrint($event)' [treeColumnIndex]='1'  childMapping='subtasks' [toolbar]='toolbarOptions'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=120></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=110></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public data?: Object[];
    public toolbarOptions?: ToolbarItems[];
    public selectionSettings?: SelectionSettingsModel;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Print'];
        this.selectionSettings = { type: 'Multiple' };
    }
    beforePrint(e: PrintEventArgs): void {
        var rows = (this.treegrid as TreeGridComponent).getSelectedRows();
        if (rows.length) {
            (e.element as any).ej2_instances[0].getContent().querySelector('tbody').remove();
            var tbody = createElement('tbody');
            rows = [...rows];
            for (var r = 0; r < rows.length; r++) {
                tbody.appendChild(rows[r].cloneNode(true));
            }
            (e.element as any).ej2_instances[0].getContentTable().appendChild(tbody);
        }
    }
}



