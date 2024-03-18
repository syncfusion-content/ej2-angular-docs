import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, EditService, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        UploaderModule ,
        DialogModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, PageService, ToolbarService]
})
export class AppModule { }