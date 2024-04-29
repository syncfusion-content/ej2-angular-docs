import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule, EditService, ToolbarService, SortService, PageService } from '@syncfusion/ej2-angular-treegrid';
import { AppComponent } from './app.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule, NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule } from "@syncfusion/ej2-angular-buttons";

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TreeGridModule,
        FormsModule,
        FormsModule,
        TextBoxModule,
        MultiSelectModule,
        AutoCompleteModule,
        ButtonModule,
        NumericTextBoxAllModule,
        DropDownListModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, ToolbarService, SortService, PageService]
})
export class AppModule { }