

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import {  TextWrapSettingsModel, WrapMode } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';

@Component({
    imports: [
    TreeGridAllModule,DropDownListAllModule
    ],
standalone: true,
    selector: 'app-container',
    template: ` <div style="display: flex">
                    <label style="padding: 10px 10px 26px 0"> Change the wrapmode of auto wrap feature: </label> 
                    <ejs-dropdownlist style="margin-top:5px" index="0" width="100" [dataSource]="ddlData" (change)="valueChange($event)"></ejs-dropdownlist>
                </div>
                <ejs-treegrid #treegrid [dataSource]='data' height='275' [treeColumnIndex]='1' allowTextWrap='true' [textWrapSettings]='wrapSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText="Task Name Column for Tree Grid"  textAlign='Left' width=90></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public wrapSettings?: TextWrapSettingsModel;
    public ddlData: object[] = [
        { text: 'Content', value: 'Content' },
        { text: 'Header', value: 'Header' },
        { text: 'Both', value: 'Both' },
      ];
    

    ngOnInit(): void {
        this.data = sampleData;
        this.wrapSettings = { wrapMode: 'Content' };
    }
    valueChange(args: ChangeEventArgs): void {
        (this.treegrid as TreeGridComponent).textWrapSettings.wrapMode = args.value as WrapMode;
      }
}



