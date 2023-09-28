import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BreadcrumbModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, BreadcrumbModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }