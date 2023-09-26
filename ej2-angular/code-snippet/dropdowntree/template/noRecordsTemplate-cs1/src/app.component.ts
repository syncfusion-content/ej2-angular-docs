


import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { DropDownTreeComponent } from '@syncfusion/ej2-angular-dropdowns';
@Component({
  selector: 'app-container',
  template: `<ejs-dropdowntree id='dropdownTree' [fields]='fields' [popupHeight]='height' [placeholder]='watermark' [noRecordsTemplate]='noRecordsTemplate'></ejs-dropdowntree>`
})
export class AppComponent {
  public data: { [key: string]: Object }[] = [ ];
  public fields: Object = { dataSource: this.data, text: 'name', value: 'id', parentValue: 'pid', hasChildren: 'hasChild' };
  public height: string = '300px';
  public watermark: string = 'Select an employee';
  public noRecordsTemplate: Object = '<span class="norecord"> NO DATA AVAILABLE</span>';
}



