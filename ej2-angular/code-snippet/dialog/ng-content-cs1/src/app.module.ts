import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, NgContentComponent } from './app.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
		DialogModule
    ],
    declarations: [AppComponent, NgContentComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }