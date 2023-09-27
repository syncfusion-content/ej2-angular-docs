import { AppComponent } from './app.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
    imports: [SidebarModule, ButtonModule, BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }