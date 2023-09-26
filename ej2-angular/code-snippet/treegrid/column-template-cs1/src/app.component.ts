

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { getValue, isNullOrUndefined } from '@syncfusion/ej2-base';
import { BeforeOpenCloseEventArgs } from '@syncfusion/ej2-inputs';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid [dataSource]='data' #treegrid height='220' [allowPaging]='true' pageSettings='pager'
    [contextMenuItems]='contextMenuItems' [treeColumnIndex]='1'
    (contextMenuClick)='contextMenuClick($event)' (contextMenuOpen)='contextMenuOpen($event)'  childMapping='subtasks'>
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
    public pager?: Object;
    public editSettings?: Object;
    public contextMenuItems?: Object[];
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = {allowEditing: true, allowAdding: true, allowDeleting: true, mode:"Row"};
        this.contextMenuItems =  [
                {text: 'Collapse the Row', target: '.e-content', id: 'collapserow'},
                {text: 'Expand the Row', target: '.e-content', id: 'expandrow'}
            ];
        this.pager = { pageSize: 8 }
    }
    contextMenuClick(args?: MenuEventArgs): void {
        (this.treeGridObj as TreeGridComponent).getColumnByField('taskID');
        if ((args as MenuEventArgs ).item.id === 'collapserow') {
            (this.treeGridObj as TreeGridComponent).collapseRow(<HTMLTableRowElement>((this.treeGridObj as TreeGridComponent).getSelectedRows()[0]));
        } else {
            (this.treeGridObj as TreeGridComponent).expandRow(<HTMLTableRowElement>((this.treeGridObj as TreeGridComponent).getSelectedRows()[0]));
            }
    }
    contextMenuOpen(arg?: BeforeOpenCloseEventArgs) : void {
        let elem: Element = (arg as BeforeOpenCloseEventArgs ).event.target as Element;
        let uid: string = (elem.closest('.e-row') as Element).getAttribute('data-uid') as string;
        if (isNullOrUndefined(getValue('hasChildRecords', (this.treeGridObj as TreeGridComponent).grid.getRowObjectFromUID(uid).data))) {
           ( arg as BeforeOpenCloseEventArgs ).cancel = true;
        } else {
            let flag: boolean = getValue('expanded', (this.treeGridObj as TreeGridComponent).grid.getRowObjectFromUID(uid).data);
            let val: string = flag ? 'none' : 'block';
            document.querySelectorAll('li#expandrow')[0].setAttribute('style', 'display: ' + val + ';');
            val = !flag ? 'none' : 'block';
            document.querySelectorAll('li#collapserow')[0].setAttribute('style', 'display: ' + val + ';');
        }
    }
}



