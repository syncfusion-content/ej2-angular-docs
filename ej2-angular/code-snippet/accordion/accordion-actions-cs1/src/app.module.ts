import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective, AccordionModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        AccordionModule
    ],
    declarations: [AppComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }