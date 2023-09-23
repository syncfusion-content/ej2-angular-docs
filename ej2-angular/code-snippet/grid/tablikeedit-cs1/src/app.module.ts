import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { CheckBoxAllModule, ButtonModule } from "@syncfusion/ej2-angular-buttons";

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ButtonModule,
        CheckBoxAllModule,
        TabAllModule,
        GridModule,
        DropDownListAllModule, ReactiveFormsModule, FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, ToolbarService]
})
export class AppModule { }