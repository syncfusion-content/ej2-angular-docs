import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService, ToolbarService, } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { SearchEventArgs, KeyboardEventArgs } from '@syncfusion/ej2-angular-grids';
import { Query, Predicate } from '@syncfusion/ej2-data';
@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='270' [treeColumnIndex]='1' [toolbar]='toolbarOptions' childMapping='subtasks' (actionBegin)="actionBegin($event)" (keyPressed)="keyPressed($event)">
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='startDate' headerText='Start Date' textAlign='Right' format='yMd' width=90></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;

    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Search'];
    }
    actionBegin(args:any) {
      if (args.requestType == 'searching') {
          args.cancel = true;
          setTimeout(() => {
            var columns = (this.treegrid as TreeGridComponent).grid.getColumns();
            var predicate = null;
            for (var i = 0; i < columns.length; i++) {
            
              var val = (this.treegrid as TreeGridComponent).grid.valueFormatterService.fromView(
                args.searchString as string,
                (columns[i] as any).getParser(),
                columns[i].type
              );
              if (val) {
                if (predicate == null) {
                  predicate = new Predicate(columns[i].field,'contains',val,true, true);
                } else {
                  predicate = predicate.or(columns[i].field,'contains',val,true, true);
                }
              }
            }
            (this.treegrid as TreeGridComponent).query = new Query().where(predicate as Predicate);
          }, 200);
      }
  }

  keyPressed(args: any) {
      if (
        args.key == 'Enter' &&
        args.target instanceof HTMLElement &&
        args.target.closest('.e-search') &&
        (args.target as HTMLInputElement).value == ''
      ) {
        args.cancel = true;
        (this.treegrid as TreeGridComponent).query = new Query();
      }
    }
}



