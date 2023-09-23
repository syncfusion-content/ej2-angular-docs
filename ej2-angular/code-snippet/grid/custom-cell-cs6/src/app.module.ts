import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DetailRowService } from '@syncfusion/ej2-angular-grids';
import { AppComponent } from './app.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import {TextBoxModule} from '@syncfusion/ej2-angular-inputs';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        GridModule,
        ButtonModule ,
        TextBoxModule       
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [DetailRowService]
})
export class AppModule { }