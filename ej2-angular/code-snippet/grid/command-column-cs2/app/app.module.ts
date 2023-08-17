import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, EditService, CommandColumnService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DialogModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, CommandColumnService]
})
export class AppModule { }