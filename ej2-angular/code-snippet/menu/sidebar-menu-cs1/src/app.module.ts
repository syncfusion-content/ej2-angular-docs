import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Syncfusion ej2-angular-navigations module
import { SidebarModule, AccordionModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, SidebarModule, AccordionModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }