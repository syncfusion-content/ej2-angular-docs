import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MultiSelectModule } from '@syncfusion/ej2-angular-dropdowns';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,FormsModule,MultiSelectModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }