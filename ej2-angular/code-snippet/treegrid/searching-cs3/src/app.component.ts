

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<div class="e-float-input" style="width: 200px; display: inline-block;">
            <input type="text" class="searchtext"/>
            <span class="e-float-line"></span>
    <label class="e-float-text">Search text</label></div>
    <button ejs-button (click)="btnClick()">Search</button>  
    <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='190' childMapping='subtasks'  >
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
    @ViewChild('treegrid')
    public treeGridObj?: TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
    }
    btnClick(){
        let searchText: string = (<HTMLInputElement>document.getElementsByClassName('searchtext')[0]).value;
        this.treeGridObj?.search(searchText);
    }
}



