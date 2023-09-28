import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ListViewModule } from '@syncfusion/ej2-angular-lists';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, ListViewModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }