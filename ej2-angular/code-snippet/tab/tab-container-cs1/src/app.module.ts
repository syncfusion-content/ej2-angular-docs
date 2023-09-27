import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,FormsModule,TabModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }