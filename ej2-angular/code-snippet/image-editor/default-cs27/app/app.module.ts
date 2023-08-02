import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageEditorModule } from '@syncfusion/ej2-angular-image-editor';
import { AppComponent } from './app.component';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        ImageEditorModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }