import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RatingModule } from '@syncfusion/ej2-angular-inputs';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, FormsModule, RatingModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }