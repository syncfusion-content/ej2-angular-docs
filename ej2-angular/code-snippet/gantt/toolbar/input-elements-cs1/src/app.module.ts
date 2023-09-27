import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { ToolbarService } from '@syncfusion/ej2-angular-gantt';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule, ToolbarModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ToolbarService]
})
export class AppModule { }