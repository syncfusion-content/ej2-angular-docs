import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QueryBuilderModule } from '@syncfusion/ej2-angular-querybuilder';
import { AppComponent } from './app.component'
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        QueryBuilderModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }