import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,FormsModule,ColorPickerModule,SplitButtonModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }