import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, GroupService } from '@syncfusion/ej2-angular-grids';
import { ChipListModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        ChipListModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [GroupService]
})
export class AppModule { }