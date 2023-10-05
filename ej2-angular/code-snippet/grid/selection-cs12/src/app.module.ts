import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {GridModule, PageService, EditService, ToolbarService, FilterService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        ButtonModule,
        DialogModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, ToolbarService, PageService, FilterService]
})
export class AppModule { }

