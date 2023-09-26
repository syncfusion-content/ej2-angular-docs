import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { ButtonModule, CheckBoxModule   } from '@syncfusion/ej2-angular-buttons';
import { NgModule } from '@angular/core';

import { FileManagerModule, NavigationPaneService, ToolbarService, DetailsViewService  } from '@syncfusion/ej2-angular-filemanager';

@NgModule({
    imports: [FileManagerModule, BrowserModule, UploaderModule , DialogModule, ButtonModule, CheckBoxModule ],
    declarations: [AppComponent],
    providers:[ NavigationPaneService, ToolbarService, DetailsViewService],
    bootstrap: [AppComponent]
})
export class AppModule { }