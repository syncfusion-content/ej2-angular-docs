import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { AppComponent } from './app.component';
@NgModule({
    imports: [SidebarModule, ListViewModule, BrowserModule],
declarations: [AppComponent],
bootstrap: [AppComponent]
})
export class AppModule { }