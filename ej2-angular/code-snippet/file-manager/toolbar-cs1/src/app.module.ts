import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileManagerModule, NavigationPaneService, ToolbarService, DetailsViewService  } from '@syncfusion/ej2-angular-filemanager';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
    imports: [FileManagerModule, BrowserModule, CheckBoxModule],
    declarations: [AppComponent],
    providers:[ NavigationPaneService, ToolbarService, DetailsViewService],
    bootstrap: [AppComponent]
})
export class AppModule { }