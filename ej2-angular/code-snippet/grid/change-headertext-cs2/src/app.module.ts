import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, EditService, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { ButtonAllModule } from '@syncfusion/ej2-angular-buttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        ButtonAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, PageService, ToolbarService]
})
export class AppModule { }