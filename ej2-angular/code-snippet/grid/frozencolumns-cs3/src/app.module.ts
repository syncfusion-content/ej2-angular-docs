import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, FreezeService, SelectionService, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DropDownListAllModule,
        ButtonModule, CheckBoxModule, RadioButtonModule, SwitchModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [FreezeService, SelectionService, EditService, ToolbarService]
})
export class AppModule { }
