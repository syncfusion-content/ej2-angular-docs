import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GroupComponent } from './group.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [AppComponent, GroupComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
