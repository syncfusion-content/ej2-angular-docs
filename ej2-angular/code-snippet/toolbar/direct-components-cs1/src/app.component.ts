import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { ToolbarAllModule } from '@syncfusion/ej2-angular-navigations'
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars'
import { ButtonAllModule  } from '@syncfusion/ej2-angular-buttons'
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs'




import { Component} from '@angular/core';

@Component({
imports: [
        FormsModule,
        ToolbarAllModule,
        
        DatePickerAllModule,
        NumericTextBoxAllModule,
        ButtonAllModule 
    ],


standalone: true,
    selector: 'app-container',
    template: ` <ejs-toolbar>
          <e-items>
           <e-item >
            <ng-template #template>
               <ejs-numerictextbox value="10"></ejs-numerictextbox>
            </ng-template>
            </e-item>
             <e-item >
            <ng-template #template>
                <ejs-datepicker></ejs-datepicker>
            </ng-template>
            </e-item>
             <e-item text='Cut'></e-item>
             <e-item text='Copy'></e-item>
             <e-item text='Paste'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Bold'></e-item>
             <e-item text='Italic'></e-item>
             <e-item text='Underline'></e-item>
          </e-items>
        </ejs-toolbar>`
})

export class AppComponent {
}



