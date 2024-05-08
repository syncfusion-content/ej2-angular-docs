import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GridModule, GroupService, ToolbarService, PdfExportService } from '@syncfusion/ej2-angular-grids'



import { Component, OnInit, ViewChild } from '@angular/core';
import { employeeData } from './datasource';
import { GridComponent, GroupSettingsModel, ExportGroupCaptionEventArgs } from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';

@Component({
imports: [
        
        GridModule
    ],

providers: [GroupService, ToolbarService, PdfExportService],
standalone: true,
    selector: 'app-root',
    template: `<ejs-grid #grid id="CaptionTemplateGrid" [dataSource]="data" [allowGrouping]="true" [groupSettings]="groupOptions"
               [toolbar]="toolbar" (toolbarClick)="toolbarClick($event)" [allowPdfExport]="true"
               (exportGroupCaption)="exportGroupCaption($event)" height='273px'>
                <e-columns>
                    <e-column field='EmployeeID' headerText='Employee ID' width='140'></e-column>
                    <e-column field='FirstName' headerText='First Name' width='120'></e-column>
                    <e-column field='City' headerText='City'></e-column>
                    <e-column field='Title' headerText='Title' width=170></e-column>
                </e-columns>
                <ng-template #groupSettingsCaptionTemplate let-data>
                    {{ data.field }} - {{ data.key }}
                </ng-template>
                </ejs-grid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public groupOptions?: GroupSettingsModel;
    public toolbar?: string[];

    @ViewChild('grid')
    public grid?: GridComponent;

    ngOnInit(): void {
        this.data = employeeData;
        this.groupOptions = { columns: ['EmployeeID'] };
        this.toolbar = ['PdfExport'];
    }
    toolbarClick(args: ClickEventArgs): void {
        if (args.item.id === 'CaptionTemplateGrid_pdfexport') {
            (this.grid as GridComponent).pdfExport();
        }
    }
    exportGroupCaption(args: ExportGroupCaptionEventArgs) {
        args.captionText = (args.data as CaptionDataStructure)['field'] + ' - ' + (args.data as CaptionDataStructure)['key'];
    }
}

interface CaptionDataStructure {
    field: string;
    key: string;
}

