import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule, ColorPickerModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ SelectionService ]
})
export class AppModule { }