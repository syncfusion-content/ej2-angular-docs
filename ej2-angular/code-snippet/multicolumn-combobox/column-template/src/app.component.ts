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
    templateUrl: 'template.html'
})
export class AppComponent {
  public data: Object[] = [ 
    { "Name": "Andrew Fuller", "Eimg": 7, "Designation": "Team Lead", "Country": "England", "DateofJoining": "12/10/2010" },
    { "Name": "Anne Dodsworth", "Eimg": 1, "Designation": "Developer", "Country": "USA", "DateofJoining": "10/05/2000" },
    { "Name": "Janet Leverling", "Eimg": 3, "Designation": "HR", "Country": "Russia", "DateofJoining": "23/02/2016" },
    { "Name": "Laura Callahan", "Eimg": 2, "Designation": "Product Manager", "Country": "Ukraine", "DateofJoining": "30/1/2012" },
    { "Name": "Margaret Peacock", "Eimg": 6, "Designation": "Developer", "Country": "Egypt", "DateofJoining": "15/08/2014" },
    { "Name": "Michael Suyama", "Eimg": 9, "Designation": "Team Lead", "Country": "Africa", "DateofJoining": "27/07/2015" },
    { "Name": "Nancy Davolio", "Eimg": 4, "Designation": "Product Manager", "Country": "Australia", "DateofJoining": "24/05/2017" },
    { "Name": "Robert King", "Eimg": 8, "Designation": "Developer ", "Country": "India", "DateofJoining": "08/09/2018" },
    { "Name": "Steven Buchanan", "Eimg": 10, "Designation": "CEO", "Country": "Ireland", "DateofJoining": "05/03/2020" }
  ]; 
  public fields: Object = { text: 'Name', value: 'Eimg' };
  public waterMark: string = 'Select an employee';
  public gridSettings: Object = { rowHeight: 40 };
}


