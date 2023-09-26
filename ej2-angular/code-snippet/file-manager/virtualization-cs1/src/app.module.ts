import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileManagerModule,  NavigationPaneService, ToolbarService, DetailsViewService, VirtualizationService } from '@syncfusion/ej2-angular-filemanager';

@NgModule({
    imports: [FileManagerModule, BrowserModule],
    declarations: [AppComponent],
    providers:[ NavigationPaneService, ToolbarService, DetailsViewService, VirtualizationService ],
    bootstrap: [AppComponent]
})
export class AppModule { }