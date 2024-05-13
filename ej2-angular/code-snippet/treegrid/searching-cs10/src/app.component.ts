


import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService, ToolbarService, } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit ,ViewChild,ViewEncapsulation} from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems, SearchSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { QueryCellInfoEventArgs, SearchEventArgs } from '@syncfusion/ej2-angular-grids';


@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    encapsulation:ViewEncapsulation.None,
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='270' [treeColumnIndex]='1' [toolbar]='toolbarOptions' (actionBegin)="actionBegin($event)" (queryCellInfo)="queryCellInfo($event)" childMapping='subtasks'>
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`,
    styles:[`.e-rowcell .customcss{
          background-color:yellow;
    }`]
})
export class AppComponent implements OnInit {
   
    public key = '';
    public data?: Object[];
    public toolbarOptions?: ToolbarItems[];
   
    @ViewChild('treegrid') public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Search'];
    }
    actionBegin(args: SearchEventArgs) {
       
        if (args.requestType === 'searching') {
            (this.key as string) = (args.searchString as string).toLowerCase();
        }
    }
   queryCellInfo(args: QueryCellInfoEventArgs) {
        if ((this.key as string) != '') {
          var cellContent = (args.data as any)[(args.column as any).field];
          var parsedContent = cellContent.toString().toLowerCase();
          if (parsedContent.includes((this.key as string).toLowerCase())) {
            var i = 0;
            var searchStr = '';
            while (i < (this.key as string).length) {
              var index = parsedContent.indexOf((this.key as string)[i]);
              searchStr = searchStr + cellContent.toString()[index];
              i++;
            }
            (args.cell as HTMLElement).innerHTML = ((args.cell as HTMLElement).innerText as any).replaceAll(
              searchStr,
              "<span class='customcss'>" + searchStr + '</span>'
            );
          }
        }
    }
  }