

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { closest } from '@syncfusion/ej2-base';
import { EditSettingsModel, ToolbarItems } from '@syncfusion/ej2-angular-treegrid';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { CommandModel } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks' >
        <e-columns>
                    <e-column field='taskID' headerText='Task ID' isPrimaryKey='true' textAlign='Right' width=90></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    <e-column headerText='Commands' width=120 [commands]='commands'></e-column>
       </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings?: EditSettingsModel;
    public toolbarOptions?: ToolbarItems[];
    public commands?: CommandModel[];
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
    public onClick = (args: Event) => {
    let rowIndex: number = (<HTMLTableRowElement>closest(args.target as Element, '.e-row')).rowIndex;
    let data: Object[] = (this.treeGridObj as TreeGridComponent).getCurrentViewRecords();
    alert(JSON.stringify(data[rowIndex]));
}
    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
        this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.commands = [{ buttonOption: { content: 'Details', cssClass: 'e-flat', click: this.onClick.bind(this) } }];
    }
}



