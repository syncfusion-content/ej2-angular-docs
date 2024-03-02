import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TreeGridModule, ReorderService } from '@syncfusion/ej2-angular-treegrid';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        TreeGridModule,ButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ReorderService]
})
export class AppModule { }
