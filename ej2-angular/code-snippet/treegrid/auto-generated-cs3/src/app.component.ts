import { NgModule, ViewChild } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid'
import { SortService, FilterService } from '@syncfusion/ej2-angular-treegrid'
import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, EditSettingsModel, EditService, Column, PageService } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [TreeGridModule,],
    providers: [PageService, SortService, FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='250' [treeColumnIndex]='1' childMapping='subtasks' 
                 (dataBound)="dataBound()">
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
    }
    dataBound() {
        for (const cols of (this.treegrid as TreeGridComponent).columns) {
            if ((cols as Column).field === 'taskID') {
                (cols as Column).width = 120;
            }
            if ((cols as Column).field === 'startDate') {
                (cols as Column).type = 'date';
                (cols as Column).format = 'yMd';
            }
            if ((cols as Column).field === 'endDate') {
                (cols as Column).type = 'date';
                (cols as Column).format = 'yMd';
            }
            if ((cols as Column).field === 'duration') {
                (cols as Column).format = 'P2';
            }
        }
        (this.treegrid as TreeGridComponent).refreshColumns();
    }
}



