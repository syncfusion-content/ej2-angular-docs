import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component'
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

/**
 * Module
 */

@NgModule({
  imports: [
    BrowserModule,
	  QueryBuilderModule,
    CheckBoxModule,
    DropDownListModule,
    DropDownButtonModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }