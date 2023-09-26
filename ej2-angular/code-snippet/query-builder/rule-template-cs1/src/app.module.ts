import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
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
		SliderModule,
		DropDownListModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }