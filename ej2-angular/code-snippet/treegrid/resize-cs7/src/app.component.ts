

import { Component, OnInit } from '@angular/core';
import { sampleData } from './datasource';

@Component({
    selector: 'app-container',
    template: `<div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
          
                <ejs-treegrid #treegrid [dataSource]='data' height='315' [allowResizing]='true' [treeColumnIndex]='1' childMapping='subtasks' 
                (resizeStart)="resizeStart()" (resizing)="resizing()" (resizeStop)="resizeStop()">
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' minWidth=170 maxWidth=250 textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' minWidth=50 maxWidth=150 textAlign='Right' width=80></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public message?: string;

    ngOnInit(): void {
        this.data = sampleData;
    }

    resizing() {
        this.message = 'resizing event is Triggered';
    }
    resizeStop() {
        this.message = 'resizeStop event is Triggered';
    }
    resizeStart() {
        this.message = 'resizeStart event is Triggered';
    }
}



