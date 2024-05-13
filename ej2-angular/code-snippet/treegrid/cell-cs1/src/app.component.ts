import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-buttons';

@Component({
    imports: [
    TreeGridAllModule,SwitchModule 
    ],
    standalone: true,
    selector: 'app-container',
    template: `<div>
                    <label style="padding: 10px 10px">Enable or disable HTML Encode</label>
                    <ejs-switch id="switch" (change)="change($event)"></ejs-switch>
                </div>
                <ejs-treegrid #treegrid [dataSource]='data' height='300' [treeColumnIndex]='1' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText="<strong> Task Name </strong>"  textAlign='Left' width=150></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    change(args: ChangeEventArgs) {
        if (args.checked) {
            (this.treegrid as TreeGridComponent).getColumnByField('taskName').disableHtmlEncode = false;
        } else {
            (this.treegrid as TreeGridComponent).getColumnByField('taskName').disableHtmlEncode = true;
        }
        (this.treegrid as TreeGridComponent).refreshColumns();
    }

    ngOnInit(): void {
        this.data = sampleData;
       
    }
}



