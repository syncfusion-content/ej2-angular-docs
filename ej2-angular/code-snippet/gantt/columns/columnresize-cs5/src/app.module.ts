import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ResizeService } from '@syncfusion/ej2-angular-gantt';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule, DropDownListAllModule, TextBoxModule, ButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ResizeService]
})
export class AppModule { }