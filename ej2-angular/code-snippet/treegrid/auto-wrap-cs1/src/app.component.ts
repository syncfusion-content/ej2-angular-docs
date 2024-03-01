

import { Component, OnInit,ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { TreeGridComponent, TextWrapSettingsModel, WrapMode } from '@syncfusion/ej2-angular-treegrid';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';

@Component({
    selector: 'app-container',
    template: `<div style="display: flex">
               <label style="padding: 30px 17px 0 0" >Autowrap for header column :</label>
               <ejs-dropdownlist style="padding: 26px 0 0 0" index="0" width="100" [dataSource]=" dropdownData" (change)="valueChange($event)">
               </ejs-dropdownlist>
              </div>
    
              <ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1' childMapping='subtasks' allowPaging='true' allowTextWrap='true' 
               [textWrapSettings]='wrapSettings'>
                 <e-columns>
                    <e-column field='taskID' headerText='Task ID' [allowSorting]="false" textAlign='Right' width=120></e-column>
                    <e-column field='taskName' headerText='Task Name' textAlign='Left' width=80></e-column>
                    <e-column field='startDate' headerText='Start Date' [allowFiltering]="false" textAlign='Right' format='yMd' width=120></e-column>
                    <e-column field='duration' headerText='Duration' textAlign='Right' width=120></e-column>
                    <e-column field='progress' headerText='Progress' textAlign='Right' width=120></e-column>
                  </e-columns>
                </ejs-treegrid>`,
})
export class AppComponent implements OnInit {

    public data?: Object[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public wrapSettings: TextWrapSettingsModel = { wrapMode: 'Header' };
    public dropdownData: Object[] = [
      { text: 'Header', value: 'Header' },
      { text: 'Both', value: 'Both' },
    ];
  
    valueChange(args: ChangeEventArgs): void {
      (this.treegrid as TreeGridComponent).textWrapSettings.wrapMode = (args.value as WrapMode);
    }
    ngOnInit(): void {
        this.data = sampleData;
    }
}



