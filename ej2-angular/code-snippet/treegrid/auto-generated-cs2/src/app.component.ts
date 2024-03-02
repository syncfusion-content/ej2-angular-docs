

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, EditSettingsModel, EditService, Column, PageService } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' 
                     allowPaging='true' [editSettings]='editSettings' (dataBound)="dataBound()">
                </ejs-treegrid>`,
    providers: [EditService, PageService]
})
export class AppComponent implements OnInit {

    public data?: Object[];
    public editSettings: EditSettingsModel;
    
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    }
    dataBound() {
        (((this.treegrid as TreeGridComponent).columns[0]) as Column).isPrimaryKey = true;
    }
}



