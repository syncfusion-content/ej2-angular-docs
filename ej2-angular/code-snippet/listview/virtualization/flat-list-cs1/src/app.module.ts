import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListViewModule, VirtualizationService } from '@syncfusion/ej2-angular-lists';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ListViewModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [VirtualizationService]
})
export class AppModule { }