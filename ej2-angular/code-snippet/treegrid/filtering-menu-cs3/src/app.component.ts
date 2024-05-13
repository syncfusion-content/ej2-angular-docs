import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule, FilterService } from '@syncfusion/ej2-angular-treegrid';

import { Component, OnInit, ViewChild } from '@angular/core';
import { sampleData } from './datasource';
import { FilterSettingsModel, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { DataUtil } from '@syncfusion/ej2-data';
import {
  MultiSelect,
} from '@syncfusion/ej2-angular-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import {
  IFilter,
  Filter,
  Column,
  PredicateModel,
} from '@syncfusion/ej2-angular-grids';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [FilterService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid [dataSource]='data' [treeColumnIndex]='1' height='275' [allowFiltering]='true' [filterSettings]='filterOptions' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='taskID' headerText='Task ID'  [filter]="filter" textAlign='Right' width=90></e-column>
                        <e-column field='taskName' headerText='Task Name'  [filter]="filter" textAlign='Left' width=150></e-column>
                        <e-column field='priority' headerText='Priority'  [filter]="filter"  width=120></e-column>
                        <e-column field='duration' headerText='Duration'  [filter]="filter" textAlign='Right' width=120></e-column>
                    </e-columns>
                </ejs-treegrid>`
})
export class AppComponent implements OnInit {

    public data?: object[];
    public filterOptions?: FilterSettingsModel;
    public filter?: IFilter;
    public dropInstance?: MultiSelect;
    @ViewChild('treegrid')
    public treegrid?:TreeGridComponent;
    ngOnInit(): void {
        this.data = sampleData;
        this.filterOptions = {
           type: 'Menu',
           
        };
        this.filter = {
          ui: {
            create: (args: { target: Element; column: object }) => {
              const flValInput: HTMLElement = createElement('input', {
                className: 'flm-input',
              });
              args.target.appendChild(flValInput);
              const fieldName: string = (args.column as Column).field;
              const dropdownData: string[] = DataUtil.distinct(this.treegrid?.flatData as any, fieldName) as string[];
              this.dropInstance = new MultiSelect({
                dataSource: dropdownData,
                placeholder: 'Select a value',
                popupHeight: '200px',
                allowFiltering: true,
                mode: 'Delimiter',
              });
              this.dropInstance.appendTo(flValInput);
            },
            write: (args:{column:Column}) => {
              const fieldName: string = (args.column.field);
              const filteredValue: string[] = [];
              ((this.treegrid as TreeGridComponent).filterSettings.columns as any).forEach((item: PredicateModel) => {
                if (item.field === fieldName && item.value) {
                  filteredValue.push(item.value as string);
                }
              });
              if (filteredValue.length > 0) {
                (this.dropInstance as MultiSelect).value = filteredValue;
              }
            },
            read: (args: {column:Column,operator:string,fltrObj:Filter}) => {
              (this.treegrid as TreeGridComponent).removeFilteredColsByField(args.column.field);
              args.fltrObj.filterByColumn(
                args.column.field,
                args.operator,
                this.dropInstance?.value as string[]
              );
            },
          },
        };
    }
}



