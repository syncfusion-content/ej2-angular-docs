import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Imported Syncfusion menu module from navigations package
import { MenuModule, ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, MenuModule, ToolbarModule], // Registering EJ2 Menu Module
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }