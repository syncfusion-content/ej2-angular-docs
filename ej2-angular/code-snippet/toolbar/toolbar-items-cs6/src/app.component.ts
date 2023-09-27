

import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBox} from '@syncfusion/ej2-inputs';
import { DropDownList} from '@syncfusion/ej2-dropdowns';
import { CheckBox, RadioButton  } from '@syncfusion/ej2-buttons';

@Component({
    selector: 'app-container',
    template: `
        <ejs-toolbar>
          <e-items>
             <e-item text='Cut'></e-item>
             <e-item text='Copy'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Undo'></e-item>
             <e-item text='Redo'></e-item>
             <e-item type='Input'>
              <ng-template #template>
                <ejs-numerictextbox  format="c2" value="1" width="150"></ejs-numerictextbox>
              </ng-template>
             </e-item>
             <e-item type='Input'>
              <ng-template #template>
                <ejs-dropdownlist [dataSource]='this.data' width="120" index="2"></ejs-dropdownlist>
              </ng-template>
             </e-item>
             <e-item type='Input'>
              <ng-template #template>
                <ejs-checkbox label="CheckBox: true" [checked]="true"></ejs-checkbox>
              </ng-template>
             </e-item>
             <e-item type='Input'>
              <ng-template #template>
                <ejs-radiobutton label='Radio' name='default' checked="true"></ejs-radiobutton>
              </ng-template>
             </e-item>
          </e-items>
        </ejs-toolbar>
        `
})

export class AppComponent {
    @ViewChild('element') element?: any;
    public data: string[] = ['Badminton', 'Basketball', 'Cricket', 'Golf', 'Hockey', 'Rugby'];
   
}


