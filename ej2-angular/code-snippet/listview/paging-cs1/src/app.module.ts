import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { PagerModule } from '@syncfusion/ej2-angular-grids';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ListViewModule, PagerModule, ButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }