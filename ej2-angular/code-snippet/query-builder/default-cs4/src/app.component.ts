import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder'
import { enableRipple } from '@syncfusion/ej2-base'



import { Component } from '@angular/core';

@Component({
imports: [
        
        QueryBuilderModule
    ],


standalone: true,
    selector: 'app-root',
    template: `<!-- To render Query Builder. -->
               <ejs-querybuilder width="70%">
                <e-columns>
                  <e-column field="EmployeeID" label="Employee ID" type="number"></e-column>
                  <e-column field="FirstName" label="First Name" type="string"></e-column>
                  <e-column field="TitleOfCourtesy" label="Title Of Courtesy" type="boolean" [values]="values"></e-column>
                  <e-column field="Title" label="Title" type="string"></e-column>
                  <e-column field="HireDate" label="Hire Date" type="date" format="dd/MM/yyyy"></e-column>
                  <e-column field="Country" label="Country" type="string"></e-column>
                  <e-column field="City" label="City" type="string"></e-column>
                </e-columns>
              </ejs-querybuilder>`
})

export class AppComponent {
   public values: string[] = ['Mr.', 'Mrs.'];

}



