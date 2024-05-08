import { NgModule,ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { PageService, SortService, FilterService,EditService } from '@syncfusion/ej2-angular-treegrid'
import {ButtonModule} from '@syncfusion/ej2-angular-buttons'



import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, EditSettingsModel, EditService, Column, PageService } from '@syncfusion/ej2-angular-treegrid';

@Component({
imports: [
        
        TreeGridModule,
        ButtonModule
    ],

providers: [PageService,
                SortService,
                FilterService,EditService ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='250' [treeColumnIndex]='1' childMapping='subtasks' 
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



