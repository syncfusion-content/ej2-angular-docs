

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks'>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];

    ngOnInit(): void {
        this.data = sampleData;
    }
}



