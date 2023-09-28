import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbModule } from '@syncfusion/ej2-angular-navigations';
import { ChipListModule } from '@syncfusion/ej2-angular-buttons';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, BreadcrumbModule, ChipListModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }