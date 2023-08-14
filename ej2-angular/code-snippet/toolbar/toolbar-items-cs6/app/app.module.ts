import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { TooltipModule } from '@syncfusion/ej2-angular-popups';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ToolbarModule, TooltipModule, NumericTextBoxModule, RadioButtonModule, CheckBoxModule, DropDownListModule
    ],
    declarations: [AppComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }