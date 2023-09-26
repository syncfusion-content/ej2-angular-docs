import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ListViewModule,
        DialogModule,
        ButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }