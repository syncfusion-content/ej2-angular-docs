import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule, ContextMenuService, EditService, SortService, ResizeService } from '@syncfusion/ej2-angular-gantt';
import { SelectionService, ToolbarService } from '@syncfusion/ej2-angular-gantt';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [SelectionService, ContextMenuService, EditService, SortService, ResizeService, ToolbarService]
})
export class AppModule { }