import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AccordionModule } from '@syncfusion/ej2-angular-navigations';

import { AccordionComponent, MyApp } from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        AccordionModule
    ],
    declarations: [AccordionComponent, MyApp],
    bootstrap: [MyApp]
})
export class AppModule { }