import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilterService, GridModule, GroupService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [GroupService,FilterService]
})
export class AppModule { }