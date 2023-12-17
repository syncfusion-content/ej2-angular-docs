import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, PageService, ToolbarService, EditService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DropDownListModule,
        TextBoxModule,
        ButtonModule 
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [PageService, ToolbarService, EditService]
})
export class AppModule { }

