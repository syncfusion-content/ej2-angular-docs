import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
    ]
})
export class AppModule { }