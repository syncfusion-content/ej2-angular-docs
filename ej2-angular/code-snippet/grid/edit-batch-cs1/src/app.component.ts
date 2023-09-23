
import { Component, ViewChild, OnInit } from '@angular/core';
import { data } from './datasource';
import { CellSaveArgs,GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  @ViewChild('normalgrid')
  public grid?: GridComponent;
  public data?: Object[];
  public editSettings?: Object;
  public toolbar?: string[];
  public orderidrules?: Object;
  public customeridrules?: Object;
  public freightrules?: Object;
  public editparams?: Object;
  public pageSettings?: Object;
  public formatoptions?: Object;

  public ngOnInit(): void {
    this.data = data.slice(0, 15);
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      showConfirmDialog:false,
      mode: 'Batch',
    };
    this.toolbar = ['Add', 'Delete'];
    this.orderidrules = { required: true, number: true };
    this.customeridrules = { required: true };
    this.freightrules = { required: true };
    this.editparams = { params: { popupHeight: '300px' } };
    this.pageSettings = { pageCount: 5 };
    this.formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
  }
  save(args: CellSaveArgs) {
    this.grid?.editModule.batchSave();
  }
}

