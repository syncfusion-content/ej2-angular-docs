

import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { Button } from '@syncfusion/ej2-buttons';

@Component({
    selector: 'control-content',
    // specifies the template string for the DropDownList component with change event
    templateUrl: `clear.html`
})
export class AppComponent {
    constructor() {
    }
    ngAfterViewInit() {
      // Set null value to value property for clear the selected item
        document.getElementById('btn')!.onclick = () => {
          (this.dropDownListObject as any).value = null;
        }
    }
    // defined the array of data
    public data: string[] = ['Badminton', 'Basketball', 'Cricket', 'Golf', 'Hockey', 'Rugby'];
    // set placeholder text to DropDownList input element
    public placeholder: string = 'Select a game';
     @ViewChild('ddlelement')
    public dropDownListObject?: DropDownListComponent;
}


