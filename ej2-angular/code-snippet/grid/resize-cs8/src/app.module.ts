import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, ResizeService } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        DropDownListAllModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ResizeService]
})
export class AppModule { }
