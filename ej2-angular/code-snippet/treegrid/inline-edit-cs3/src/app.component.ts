

import { NgModule, } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { TreeGridAllModule } from '@syncfusion/ej2-angular-treegrid';
import { Component, OnInit, ViewChild } from '@angular/core';
import { summaryData } from './datasource';
import { EditSettingsModel, ToolbarItems, TreeGridComponent, EditService, ToolbarService, PageService} from '@syncfusion/ej2-angular-treegrid';
import { IEditCell } from '@syncfusion/ej2-angular-grids';
import { NumericTextBox } from '@syncfusion/ej2-inputs';

@Component({
    imports: [
    TreeGridAllModule,
    ],
    providers: [EditService, ToolbarService, PageService],
    standalone: true,
    selector: 'app-container',
    template: `<ejs-treegrid #treegrid id="treegrid" [dataSource]='data'  [toolbar]='toolbarOptions' [treeColumnIndex]='1' height='270' [editSettings]='editSettings' childMapping='subtasks' >
                    <e-columns>
                        <e-column field='ID' headerText='ID' [isPrimaryKey]='true' textAlign='Right' width=90></e-column>
                        <e-column field='Name' headerText='Name' textAlign='Left' width=180></e-column>
                        <e-column field='units' headerText='Units' textAlign='Right' editType="numericedit" [edit]="unitsParams" format="C2" width=120></e-column>
                        <e-column field='unitPrice' headerText='Unit Price' textAlign='Right' editType="numericedit" [edit]="unitPriceParams" width=120></e-column>
                        <e-column field='price' headerText='Total Price' [allowEditing]= 'false' textAlign='Right' format="C2" width=110></e-column>
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

  ngOnInit(): void {
    this.data = summaryData;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Row'
    };
    this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    this.unitsParams = { params: { change: this.calculateTotalValue.bind(this)} };
    this.unitPriceParams = {  params: { change: this.calculateTotalValue.bind(this) }  };
  }
  calculateTotalValue(args:any): void {
    const formEle = ((this.treegrid as TreeGridComponent).element.querySelector('form') as HTMLFormElement)['ej2_instances'][0];
    formEle.getInputElement('price').value = formEle.getInputElement('units').value * formEle.getInputElement('unitPrice').value;
  }
}