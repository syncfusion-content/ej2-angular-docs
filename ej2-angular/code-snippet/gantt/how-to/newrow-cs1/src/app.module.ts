import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GanttModule,ContextMenuService, ContextMenuItem} from '@syncfusion/ej2-angular-gantt';
import { EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, GanttModule,ContextMenuModule 
    ],
    declarations: [AppComponent,],
    bootstrap: [AppComponent],
    providers: [EditService, SelectionService]
})
export class AppModule { }