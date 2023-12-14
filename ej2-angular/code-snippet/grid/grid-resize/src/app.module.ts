import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule, ResizeService } from '@syncfusion/ej2-angular-grids';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        NumericTextBoxModule,
        ButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ResizeService]
})
export class AppModule { }
