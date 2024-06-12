

import { Component, HostListener, ViewChild } from '@angular/core';
import { MultiColumnComboBoxComponent } from '@syncfusion/ej2-angular-multicolumn-combobox';

@Component({
    selector: 'app-root',
    // specifies the template string for the MultiColumn ComboBox component with change event
    template: `<ejs-multicolumncombobox id='multicolumn' #multicolumn [dataSource]='empData' [fields]='fields' [placeholder]='waterMark'>
                  <e-columns>
                    <e-column field='EmpID' header='Employee ID' width='100'></e-column>
                    <e-column field='Name' header='Name' width='90'></e-column>
                    <e-column field='Designation' header='Designation' width='100'></e-column>
                    <e-column field='Country' header='Country' width='90'></e-column>
                  </e-columns>
                </ejs-multicolumncombobox>`
})
export class AppComponent {
    @ViewChild('multicolumn')
    public multicomboBoxObj?: MultiColumnComboBoxComponent;
    constructor() {
    }
    // defined the array of object data
    public empData: Object[] = [ 
        { "EmpID": 1001, "Name": "Andrew Fuller", "Designation": "Team Lead", "Country": "England" },
        { "EmpID": 1002, "Name": "Robert", "Designation": "Developer", "Country": "USA" },
        { "EmpID": 1003, "Name": "Michael", "Designation": "HR", "Country": "Russia" },
        { "EmpID": 1004, "Name": "Steven Buchanan", "Designation": "Product Manager", "Country": "Ukraine" },
        { "EmpID": 1005, "Name": "Margaret Peacock", "Designation": "Developer", "Country": "Egypt" },
        { "EmpID": 1006, "Name": "Janet Leverling", "Designation": "Team Lead", "Country": "Africa" },
        { "EmpID": 1007, "Name": "Alice", "Designation": "Product Manager", "Country": "Australia" },
        { "EmpID": 1008, "Name": "Bob", "Designation": "Developer", "Country": "India" },
        { "EmpID": 1009, "Name": "John", "Designation": "Product Manager", "Country": "Ireland"},
        { "EmpID": 1010, "Name": "Mario Pontes", "Designation": "Team Lead", "Country": "South Africa" },
        { "EmpID": 1011, "Name": "Yang Wang", "Designation": "Developer", "Country": "Russia" },
        { "EmpID": 1012, "Name": "David", "Designation": "Product Manager", "Country": "Egypt" },
        { "EmpID": 1013, "Name": "Antonio Bianchi", "Designation": "Team Lead", "Country": "USA" },
        { "EmpID": 1014, "Name": "Laura", "Designation": "Developer", "Country": "England" },
        { "EmpID": 1015, "Name": "Carlos Hernandez", "Designation": "Developer", "Country": "Canada" },
        { "EmpID": 1016, "Name": "Lily", "Designation": "Product Manager", "Country": "France" },
        { "EmpID": 1017, "Name": "Tom Williams", "Designation": "Developer", "Country": "Ukraine" },
        { "EmpID": 1018, "Name": "Grace", "Designation": "Developer", "Country": "Australia" },
        { "EmpID": 1019, "Name": "Olivia", "Designation": "Team Lead", "Country": "Ireland" },
        { "EmpID": 1020, "Name": "James", "Designation": "Developer", "Country": "China" },
    ]; 
    // maps the appropriate column to fields property
    public fields: Object = { text: 'Name', value: 'EmpID' };
    // set placeholder to ComboBox input element
    public waterMark: string = "Select a employee";
    @HostListener('document:keyup', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        if (event.altKey && event.keyCode === 84 /* t */) {
            // press alt+t to focus the control.
            this.multicomboBoxObj!.focusIn();
        }
    }
}


