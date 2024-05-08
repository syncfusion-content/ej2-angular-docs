import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns'




import { Component } from '@angular/core';

@Component({
imports: [
        FormsModule,DropDownListModule
    ],


standalone: true,
    selector: 'app-root',
    // specifies the template string for the DropDownList component
    template:  `<ejs-dropdownlist id='ddlelement' [dataSource]='data' placeholder='Find a item'>
                    <ng-template #noRecordsTemplate>
                        <span class='norecord'> NO DATA AVAILABLE</span>
                    </ng-template>
                 </ejs-dropdownlist>`
})
export class AppComponent {
    // defined the empty array data
    public data: string[] = [];
}


