import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TabAllModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        FormsModule,
        TabAllModule,
        BrowserModule,
        TreeViewModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }