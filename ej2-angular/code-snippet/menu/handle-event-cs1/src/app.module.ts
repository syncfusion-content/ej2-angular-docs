import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MenuModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, MenuModule, ButtonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }