import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService, ToolbarService, } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { Column, SearchSettingsModel, ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { SearchEventArgs, KeyboardEventArgs } from '@syncfusion/ej2-angular-grids';
import { Query, Predicate } from '@syncfusion/ej2-data';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService, ToolbarService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' height='270' [treeColumnIndex]='1' [searchSettings]='searchOptions' [toolbar]='toolbarOptions' childMapping='subtasks' (actionBegin)="actionBegin($event)" (actionComplete)="actionComplete($event)">
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name' textAlign='Left' width=180></e-column>
                        <e-column field='duration' headerText='Duration' textAlign='Right' width=80></e-column>
                        <e-column field='progress' headerText='Progress' textAlign='Right' width=80></e-column>
                        <e-column field='priority' headerText='Priority' textAlign='Right' width=80></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public toolbarOptions?: ToolbarItems[];
    @ViewChild('treegrid')
    public treegrid?: TreeGridComponent;
    public values?: string;
    public key = '';
    public removeQuery = false;
    public valueAssign = false;
    public searchOptions?: SearchSettingsModel;
    ngOnInit(): void {
        this.data = sampleData;
        this.toolbarOptions = ['Search'];
        this.searchOptions = {
          fields: [
              'taskID',
              'taskName',
              'duration',
              'progress',
              'priority'
          ],
          operator: 'contains',
          key: '',
          ignoreCase: true,
      };
    }
    actionBegin({ requestType, searchString }: SearchEventArgs) {
      if (requestType == 'searching') {
          const keys = (searchString as string).split(',');
          var flag = true;
          var predicate: any;
          if (keys.length > 1) {
              if ((this.treegrid as TreeGridComponent).searchSettings.key !== '') {
                  this.values = searchString;
                  keys.forEach((key: string) => {
                      (this.treegrid as TreeGridComponent).getColumns().forEach((col: Column) => {
                          if (flag) {
                              predicate = new Predicate(col.field, 'contains', key, true);
                              flag = false;
                          }
                          else {
                              var predic = new Predicate(col.field, 'contains', key, true);
                              predicate = predicate.or(predic);
                          }
                      });
                  });
                  
                  (this.treegrid as TreeGridComponent).query = new Query().where(predicate);
                  (this.treegrid as TreeGridComponent).searchSettings.key = '';
                  this.valueAssign = true;
                  this.removeQuery = true;
                  (this.treegrid as TreeGridComponent).refresh();
              }
          }
      }
  }
  actionComplete(args: SearchEventArgs) {
      if (args.requestType === 'refresh' && this.valueAssign) {
          const searchBar = document.querySelector<HTMLInputElement>('#' + (this.treegrid as TreeGridComponent).element.id + '_searchbar');
          if (searchBar) {
              searchBar.value = this.values || '';
              this.valueAssign = false;
          }
          else if (
              args.requestType === 'refresh' &&
              this.removeQuery
          ) {
              const searchBar = document.querySelector<HTMLInputElement>('#' + (this.treegrid as TreeGridComponent).element.id + '_searchbar');
              if (searchBar) {
                  searchBar.value = '';
              }
              (this.treegrid as TreeGridComponent).query = new Query();
              this.removeQuery = false;
              (this.treegrid as TreeGridComponent).refresh();
          }
      }
  }
}



