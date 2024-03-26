import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { SortDirection } from '@syncfusion/ej2-grids';
import { sortData } from './datasource';

@Component({
  selector: 'app-root',
  template: `
            <div style="display: flex">
                <label style="padding: 30px 20px 0 0"> Column name :</label>
                <ejs-dropdownlist #dropdown style="padding: 26px 0 0 0" index="0" width="120" [dataSource]="columns" [fields]="field"></ejs-dropdownlist>
            </div>
            <button style="margin-top: 10px " ejs-button id="button" cssClass="e-outline" (click)="removeSortColumn()" >Remove sort column</button>
    
            <ejs-treegrid #treegrid [dataSource]='data' height='315' [treeColumnIndex]='1'  [allowSorting]='true' childMapping='subtasks' [sortSettings]='initialSort'>
                <e-columns>
                    <e-column field='Category' headerText='Category' textAlign='Right' width=140></e-column>
                    <e-column field='orderName' headerText='Order Name' textAlign='Left' width=200></e-column>
                    <e-column field='orderDate' headerText='Order Date' textAlign='Right' format='yMd' width=150></e-column>
                    <e-column field='units' headerText='Units' textAlign='Right' width=80></e-column>
                </e-columns>
            </ejs-treegrid>`,
})
export class AppComponent implements OnInit {
  public data?: Object[];
  public initialSort?: Object;

  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;
  @ViewChild('dropdown')
  public dropDown?: DropDownListComponent;
  public columns: object[] = [
    { text: 'Category', value: 'Category' },
    { text: 'Order Name', value: 'orderName' },
    { text: 'Order Date', value: 'orderDate' },
    { text: 'Units', value: 'units' },
  ];
  public direction: object[] = [
    { text: 'Ascending', value: 'Ascending' },
    { text: 'Descending', value: 'Descending' },
  ];
  public field: object = { text: 'text', value: 'value' };

  ngOnInit(): void {
    this.data = sortData;
    this.initialSort = {
      columns: [
        { field: 'orderName', direction: 'Ascending' },
        { field: 'Category', direction: 'Descending' },
      ],
    };
  }

  removeSortColumn() {
    (this.treegrid as TreeGridComponent).removeSortColumn(
      (this.dropDown as DropDownListComponent).value as string
    );
  }
}
