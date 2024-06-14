import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MultiColumnComboBoxModule } from '@syncfusion/ej2-angular-multicolumn-combobox'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component, HostListener, ViewChild } from '@angular/core';
import { MultiColumnComboBoxComponent } from '@syncfusion/ej2-angular-multicolumn-combobox';


@Component({
    imports: [ FormsModule, ReactiveFormsModule, MultiColumnComboBoxModule, ButtonModule ],
    standalone: true,
    selector: 'app-root',
    // specifies the template string for the MultiColumn ComboBox component with change event
    template: `<ejs-multicolumncombobox id='multicolumn' #multicolumn [dataSource]='records' [fields]='fields' [placeholder]='waterMark' [enableVirtualization]='true' [gridSettings]='gridSettings' popupHeight='230px'>
                 <e-columns>
                    <e-column field='TaskID' header='Task ID' width='100'></e-column>
                    <e-column field='Engineer' header='Engineer' width='140'></e-column>
                    <e-column field='Designation' header='Designation' width='130'></e-column>
                    <e-column field='Status' header='Status' width='110'></e-column>
                </e-columns>
                </ejs-multicolumncombobox>`
})
export class AppComponent {
  //Generate large datas
  public records: { [key: string]: Object }[] = [];
  constructor() {
      let names = ["John", "Alice", "Bob", "Mario Pontes", "Yang Wang", "Michael", "Nancy", "Robert King"];
      let hours = [8, 12, 16];
      let status = ["Pending", "Completed", "In Progress"];
      let designation = ["Engineer", "Manager", "Tester"];
      let result: { [key: string]: Object }[] = [];
      for (let i = 0; i < 150; i++) {
          result.push({
              TaskID: i + 1,
              Engineer: names[Math.floor(Math.random() * names.length)],
              Designation: designation[Math.floor(Math.random() * designation.length)],
              Estimation: hours[Math.floor(Math.random() * hours.length)],
              Status: status[Math.floor(Math.random() * status.length)]
          });
      }
      this.records = result;
  }
  public fields: Object = { text: 'Engineer', value: 'TaskID'};
  public waterMark: string = 'Select an engineer';
  public gridSettings: Object = { rowHeight: 40 };
}


