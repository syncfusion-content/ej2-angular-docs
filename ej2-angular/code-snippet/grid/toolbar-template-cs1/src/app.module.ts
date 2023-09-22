import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, ToolbarService, GroupService } from '@syncfusion/ej2-angular-grids';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        ToolbarModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ToolbarService, GroupService]
})
export class AppModule { }