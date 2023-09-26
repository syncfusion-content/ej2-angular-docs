import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileManagerAllModule,NavigationPaneService, ToolbarService, DetailsViewService  } from '@syncfusion/ej2-angular-filemanager';

@NgModule({
    imports: [FileManagerAllModule, BrowserModule],
    declarations: [AppComponent],
    providers:[NavigationPaneService, ToolbarService, DetailsViewService],
    bootstrap: [AppComponent]
})
export class AppModule { }