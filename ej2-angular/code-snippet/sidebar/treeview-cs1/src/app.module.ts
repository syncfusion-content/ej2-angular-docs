import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SidebarModule, TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component'

@NgModule({
    imports: [SidebarModule, BrowserModule, TreeViewModule],
declarations: [AppComponent],
bootstrap: [AppComponent]
})
export class AppModule { }