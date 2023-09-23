import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, EditService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { DatePickerAllModule } from '@syncfusion/ej2-angular-calendars';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DatePickerAllModule,
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, ToolbarService]
})
export class AppModule { }