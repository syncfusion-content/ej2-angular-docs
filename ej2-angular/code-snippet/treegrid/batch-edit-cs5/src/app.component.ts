import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {  TreeGridModule, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid'
import { PageService, EditService, ToolbarService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { projectData } from './datasource';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
@Component({
    imports: [TreeGridModule],

    providers: [PageService, EditService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' parentIdMapping='parentID' idMapping='TaskID' [toolbar]='toolbar' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' (created)="created()" (load)="load()" >
                    <e-columns>
                        <e-column field='TaskID' headerText='Task ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='TaskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='Priority' headerText='Priority' textAlign='Right' width=90></e-column>
                        <e-column field='StartDate' headerText='Start Date' textAlign='Right' format='yMd' type='date' editType='datepickeredit' width=90></e-column>
                        <e-column field='Duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public editSettings?: EditSettingsModel;
    public toolbar?: ToolbarItems[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = projectData;
        this.editSettings = {
            showConfirmDialog: true, showDeleteConfirmDialog: true,
            allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch'
        };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    }
    created = () => {
        (this.treegrid as TreeGridComponent).getContentTable().addEventListener('click', (args) => {
            if ((args.target as HTMLElement).classList.contains('e-rowcell') || (args.target as HTMLElement).classList.contains('e-treecell')) {
                setTimeout(()=>{
                    (this.treegrid as TreeGridComponent).editModule.editCell(parseInt(((args.target as any).closest('.e-rowcell').getAttribute('index') as string)),
                        (this.treegrid as TreeGridComponent).grid.getColumnByIndex(parseInt((args.target as any).closest('.e-rowcell').getAttribute('data-colindex') as string)).field);
                    });
                
           }
        });
    };
    load = () => {
        (this.treegrid as TreeGridComponent).element.addEventListener('keydown', (e) => {
            var closesttd = (e.target as HTMLElement).closest('td');
            if (e.keyCode === 39 && !isNullOrUndefined(((closesttd as HTMLTableCellElement).nextSibling as HTMLElement))) {
                this.edit_Cell(((closesttd as HTMLTableCellElement).nextSibling as  HTMLElement));
            }
            if (e.keyCode === 37 && !isNullOrUndefined(((closesttd as HTMLTableCellElement).previousSibling as HTMLElement)) &&
                !(this.treegrid as TreeGridComponent).grid.getColumnByIndex(
                    parseInt((((closesttd as HTMLTableCellElement).previousSibling  as HTMLElement).getAttribute('data-colindex') as string))).isPrimaryKey)
            {
                this.edit_Cell(((closesttd as HTMLTableCellElement).previousSibling as HTMLElement));
            }
            if (e.keyCode === 40 && !isNullOrUndefined((((closesttd as HTMLTableCellElement).closest('tr') as HTMLTableRowElement).nextSibling as HTMLElement ))) {
                this.edit_Cell(
                    (((closesttd as HTMLTableCellElement).closest('tr') as  HTMLTableRowElement).nextSibling as HTMLElement).querySelectorAll('td')[
                    parseInt(((closesttd as HTMLTableCellElement).getAttribute('data-colindex') as string))]);
            }
            if ( e.keyCode === 38 && !isNullOrUndefined((((closesttd as HTMLTableCellElement ).closest('tr') as HTMLTableRowElement).previousSibling as ChildNode))) {
                this.edit_Cell(
                    (((closesttd as HTMLTableCellElement).closest('tr') as HTMLTableRowElement).previousSibling as HTMLElement).querySelectorAll('td')[
                     parseInt(((closesttd as HTMLTableCellElement).getAttribute('data-colindex') as string))]);
            }
        });
    };
    public edit_Cell(args: HTMLElement) {
        (this.treegrid as TreeGridComponent).editModule.editCell(
            parseInt((args.getAttribute('index') as string)),
            (this.treegrid as TreeGridComponent).grid.getColumnByIndex(parseInt(args.getAttribute('data-colindex') as string)).field);
    }
}



