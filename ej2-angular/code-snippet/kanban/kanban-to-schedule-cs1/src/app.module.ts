import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { AppComponent } from './app.component';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        KanbanModule,
        ScheduleAllModule,
        RecurrenceEditorAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }