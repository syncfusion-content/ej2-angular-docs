import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DefaultToolbarComponent } from './app.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';


/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, ToolbarModule, ButtonModule
    ],
    declarations: [DefaultToolbarComponent ],
    bootstrap: [DefaultToolbarComponent]
})
export class AppModule { }