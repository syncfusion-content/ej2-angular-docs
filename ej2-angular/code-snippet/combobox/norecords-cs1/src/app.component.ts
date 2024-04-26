import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns'




import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule,ComboBoxModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the ComboBox component
    template:  `<ejs-combobox id='comboelement' [dataSource]='data' placeholder='Find a item'>
                    <ng-template #noRecordsTemplate>
                        <span class='norecord'> NO DATA AVAILABLE</span>
                    </ng-template>
                 </ejs-combobox>`
})
export class AppComponent {
    // defined the empty array data
    public data: string[] = [];
}


