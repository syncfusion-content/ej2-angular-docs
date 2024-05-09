import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService, ToolbarService, } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import {TextBoxComponent} from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    imports: [
    TreeGridAllModule, ButtonModule, TextBoxModule
    ],
    providers: [FilterService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<div class="e-float-input" style="width: 120px; display: inline-block;">
                    <ejs-textbox #searchInput width="100" placeholder="Search text"></ejs-textbox>
                    <span class="e-float-line"></span>
                </div>
                <button ejs-button id='search' (click)='search()'>Search</button>

                <ejs-treegrid #treegrid [dataSource]='data' height='270' [treeColumnIndex]='1' childMapping='subtasks'>
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
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;
    @ViewChild('searchInput') public searchInput?: TextBoxComponent;
    ngOnInit(): void {
        this.data = sampleData;
        
    }
    search() {
        const searchText: string = (this.searchInput as TextBoxComponent).value;
        (this.treegrid as TreeGridComponent).search(searchText);
    }
}



