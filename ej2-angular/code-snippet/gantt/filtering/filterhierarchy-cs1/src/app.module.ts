import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
import { DropDownListComponent,DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { FilterService } from '@syncfusion/ej2-angular-gantt';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule,DropDownListAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [FilterService]
})
export class AppModule { }