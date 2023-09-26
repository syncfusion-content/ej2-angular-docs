import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        KanbanModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }