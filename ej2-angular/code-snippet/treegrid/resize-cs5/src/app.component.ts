

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import {  ResizeMode } from '@syncfusion/ej2-angular-grids';
import { ChangeEventArgs } from '@syncfusion/ej2-angular-dropdowns';
import { ResizeService,TreeGridComponent  } from '@syncfusion/ej2-angular-treegrid';

@Component({
    selector: 'app-container',
    template: `<div style="display: flex">
                   <label style="padding: 10px 10px 26px 0"> Change the resize mode: </label>
                   <ejs-dropdownlist style="margin-top:5px" index="0" width="150" [dataSource]="ddlData"
                   (change)="valueChange($event)"></ejs-dropdownlist>
                </div>

                <ejs-treegrid #treegrid [dataSource]='data' height='315' [allowResizing]='true' [treeColumnIndex]='1' childMapping='subtasks'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public ddlData: object[] = [
      { text: 'Normal', value: 'Normal' },
      { text: 'Auto', value: 'Auto' },
    ];
    ngOnInit(): void { 
        this.data = sampleData;
    }

    valueChange(args: ChangeEventArgs): void {
        (this.treegrid as TreeGridComponent).grid.resizeSettings.mode = (args.value as ResizeMode);
      }
}



