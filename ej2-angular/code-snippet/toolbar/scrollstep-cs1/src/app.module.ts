import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DefaultToolbarComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ToolbarModule
    ],
    declarations: [DefaultToolbarComponent],
    bootstrap: [DefaultToolbarComponent]
})
export class AppModule { }