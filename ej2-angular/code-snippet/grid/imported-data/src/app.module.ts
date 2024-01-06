import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, EditService, PageService, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        UploaderModule 
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [EditService, PageService, ToolbarService]
})
export class AppModule { }