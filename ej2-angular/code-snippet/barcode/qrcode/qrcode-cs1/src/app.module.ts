import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BarcodeGeneratorAllModule,QRCodeGeneratorAllModule,DataMatrixGeneratorAllModule } from '@syncfusion/ej2-angular-barcode-generator';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,  BarcodeGeneratorAllModule, QRCodeGeneratorAllModule ,DataMatrixGeneratorAllModule 
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ ]
})
export class AppModule { }