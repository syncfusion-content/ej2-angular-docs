

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { FilterSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<div class='message' style="color:red">{{actionBeginMessage}}</div><div class='message' style="color:blue">{{actionCompleteMessage}}</div>
                  <ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' [filterSettings]='filterOptions'  (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)" childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID'    textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name'  textAlign='Left' width=150></e-column>
                        <e-column field='priority' headerText='Priority'   width=120></e-column>
                        <e-column field='duration' headerText='Duration'   textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;
    public actionBeginMessage: string | undefined;
    public actionCompleteMessage: string | undefined;
  
    @ViewChild('treegrid')
    public treegrid?:TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
        this.filterOptions = {
           type: 'Menu',
           
        };
        
    }
    actionBegin(args: any) {
      this.actionBeginMessage='';
      if (args.requestType == 'filterbeforeopen' && args.columnType === "number") {
          args.filterModel.customFilterOperators.numberOperator = [
          { value: "equal", text: "Equal" },
          { value: "notequal", text: "Not Equal" }];
          this.actionBeginMessage ='Filter operators for number column were customized using the filterbeforeopen action in the actionBegin event';
      }
      else{
        this.actionBeginMessage = args.requestType + ' action is triggered in actionBegin event'
      }
      if(args.requestType == 'filtering' && args.currentFilteringColumn == 'priority'){
        args.cancel=true;
        this.actionBeginMessage = args.requestType + ' is not allowed for Priority column';
      }
  
    }
    actionComplete(args: any) {
      if(args.requestType === 'filterafteropen') {
        this.actionCompleteMessage ='Applied CSS for filter dialog during filterafteropen action';
        args.filterModel.dlgDiv.querySelector('.e-dlg-content').style.background = '#eeeaea';
        args.filterModel.dlgDiv.querySelector('.e-footer-content').style.background = '#30b0ce';
      }
      if(args.requestType == 'filtering'){
        this.actionCompleteMessage = args.requestType + ' action is triggered in actionComplete event';
      }
    }
}



