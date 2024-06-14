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
    template: `<ejs-multicolumncombobox id='multicolumn' #multicolumn [dataSource]='dataSource' [placeholder]='waterMark' [fields]='fields' [noRecordsTemplate]='noRecordsTemplate'>
                  <e-columns>
                    <e-column field='EmployeeID' header='Employee ID' width='90'></e-column>
                    <e-column field='Name' header='Name' width='90'></e-column>
                    <e-column field='Designation' header='Designation' width='90'></e-column>
                    <e-column field='Country' header='Country' width='70'></e-column>
                  </e-columns>
              </ejs-multicolumncombobox>`
})
export class AppComponent {
  public dataSource= [];
  public fields: Object = { text: 'Name', value: 'EmpID' };
  public waterMark: string = 'Select a name';
  public noRecordsTemplate: string = "<span class='norecord'> NO RECORDS FOUND </span>";
}


