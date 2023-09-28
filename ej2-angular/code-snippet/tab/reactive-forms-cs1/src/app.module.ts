import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'
import { AppComponent } from './app.component';

@NgModule({
    imports: [ BrowserModule, FormsModule, ReactiveFormsModule, AutoCompleteModule, DropDownListModule, ButtonModule,TabModule ],
declarations: [AppComponent],
bootstrap: [AppComponent]
})
export class AppModule { }