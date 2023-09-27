import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule, ContextMenuService, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [SelectionService, ContextMenuService, EditService]
})
export class AppModule { }