

import { Component, OnInit, ViewChild } from '@angular/core';
import { summaryData } from './datasource';
import { EditSettingsModel, ToolbarItems, TreeGridComponent } from '@syncfusion/ej2-angular-treegrid';
import { IEditCell } from '@syncfusion/ej2-angular-grids';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid id="treegrid" [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks' (cellEdit)="cellEdit($event)">
                    <e-columns>
                        <e-column field='ID' headerText='ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='Name' headerText='Name' textAlign='Left' width=180></e-column>
                        <e-column field='units' headerText='Units' textAlign='Right' editType="numericedit" [edit]="unitsParams" format="C2" width=120></e-column>
                        <e-column field='unitPrice' headerText='Unit Price' textAlign='Right' editType="numericedit" [edit]="unitPriceParams" width=120></e-column>
                        <e-column field='price' headerText='Total Price' textAlign='Right' format="C2" width=110></e-column>
                    </e-columns>
                </ejs-treegrid>`
})

export class AppComponent implements OnInit {
  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;
  public data?: Object[];
  public editSettings?: EditSettingsModel;
  public toolbarOptions?: ToolbarItems[];
  public unitsParams?: IEditCell;
  public unitPriceParams?: IEditCell;

  public unitsElem?: HTMLElement;
  public unitsObj?: NumericTextBox;

  public unitPriceElem?: HTMLElement;
  public unitPriceObj?: NumericTextBox;

  ngOnInit(): void {
    this.data = summaryData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Batch'
    };
    this.toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
    this.unitsParams = {
      create: () => {
        this.unitsElem = document.createElement('input');
        return this.unitsElem;
      },
      read: () => {
        return (this.unitsObj as NumericTextBox).value;
      },
      destroy: () => {
        (this.unitsObj as NumericTextBox).destroy();
      },
      write: (args: any) => {
        var rowData = args.rowData;
        var rowIndex = (this.unitsObj as any).getRowInfo(args.row).rowIndex;
        this.unitsObj = new NumericTextBox({
          value: args.rowData[args.column.field],
          change: ((args: any) => {
            var totalCostValue = args.value * rowData['unitPrice'];
            (this.treegrid as TreeGridComponent).updateCell(rowIndex, 'price', totalCostValue);
          }).bind(this)
        });
        this.unitsObj.appendTo(this.unitsElem);
      }
    };
    this.unitPriceParams = {
      create: () => {
        this.unitPriceElem = document.createElement('input');
        return this.unitPriceElem;
      },
      read: () => {
        return (this.unitPriceObj as NumericTextBox).value;
      },
      destroy: () => {
        (this.unitPriceObj as NumericTextBox).destroy();
      },
      write: (args: any) => {
        var rowData = args.rowData;
        var rowIndex = this.treegrid?.getRowInfo(args.row).rowIndex;
        this.unitPriceObj = new NumericTextBox({
          value: args.rowData[args.column.field],
          change: ((args: { value: number; }) => {
            var totalCostValue = args.value * rowData['unitPrice'];
            this.treegrid?.updateCell(rowIndex as number, 'price', totalCostValue);
          }).bind(this)
        });
        this.unitPriceObj.appendTo(this.unitPriceElem);
      }
    };
  }
  cellEdit(args: any) {
    if (args.columnName == 'price') {
      args.cancel = true;
    }
  }
}


