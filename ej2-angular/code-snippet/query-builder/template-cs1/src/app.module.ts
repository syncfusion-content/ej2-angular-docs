import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component'
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        QueryBuilderModule,
		CheckBoxModule,
		DropDownListModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }