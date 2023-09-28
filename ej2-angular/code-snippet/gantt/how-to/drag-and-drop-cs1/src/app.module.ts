import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule, GanttAllModule } from '@syncfusion/ej2-angular-gantt';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { EditService, SelectionService, ToolbarService } from '@syncfusion/ej2-angular-gantt';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule, GanttAllModule, TreeViewModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, SelectionService, ToolbarService]
})
export class AppModule { }