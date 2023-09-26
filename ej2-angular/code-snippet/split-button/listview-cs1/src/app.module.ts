import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        SplitButtonModule,
        ListViewModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }