import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { SortService,RowDDService,FilterService,ResizeService,ReorderService, ToolbarService, EditService,UndoRedoService,ColumnMenuService } from '@syncfusion/ej2-angular-gantt';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [SortService,RowDDService,FilterService,ResizeService,ReorderService, ToolbarService, EditService,UndoRedoService,ColumnMenuService]
})
export class AppModule { }