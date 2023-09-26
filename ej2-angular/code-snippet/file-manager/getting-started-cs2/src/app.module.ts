import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FileManagerModule  } from '@syncfusion/ej2-angular-filemanager';

@NgModule({
    imports: [FileManagerModule, BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }