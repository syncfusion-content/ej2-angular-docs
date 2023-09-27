import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,FormsModule,TreeViewModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }