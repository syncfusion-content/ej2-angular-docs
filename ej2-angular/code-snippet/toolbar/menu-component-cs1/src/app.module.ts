import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ToolbarAllModule, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonAllModule  } from '@syncfusion/ej2-angular-buttons';

import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        FormsModule,
        ToolbarAllModule,
        BrowserModule,
        MenuModule,
        ButtonAllModule 
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }