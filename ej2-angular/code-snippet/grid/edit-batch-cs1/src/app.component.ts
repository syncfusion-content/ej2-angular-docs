import { data } from './datasource';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePickerAllModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AutoCompleteModule, MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { CellSaveArgs, EditService, GridComponent, GridModule, PageService, SortService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
  imports: [ 
          GridModule,
          DatePickerAllModule,
          FormsModule,
          TimePickerModule,
          FormsModule,
          TextBoxModule,
          MultiSelectModule,
          AutoCompleteModule
      ],
  providers: [EditService, ToolbarService, SortService, PageService],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  @ViewChild('normalgrid')
  public grid?: GridComponent;
  public data?: Object[];
  public editSettings?: Object;
  public toolbar?: string[];
  public orderIDRules?: Object;
  public customerIDRules?: Object;
  public freightRules?: Object;
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
    this.orderIDRules = { required: true, number: true };
    this.customerIDRules = { required: true };
    this.freightRules = { required: true };
    this.editparams = { params: { popupHeight: '300px' } };
    this.pageSettings = { pageCount: 5 };
    this.formatoptions = { type: 'dateTime', format: 'M/d/y hh:mm a' };
  }
  save(args: CellSaveArgs) {
    this.grid?.editModule.batchSave();
  }
}
