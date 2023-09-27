
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabComponent, TabItemsDirective, TabItemDirective } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [AppComponent, TabComponent, TabItemsDirective, TabItemDirective ],
    bootstrap: [AppComponent]
})
export class AppModule { }