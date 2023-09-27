import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TabComponent, TabItemsDirective, TabItemDirective } from '@syncfusion/ej2-angular-navigations';
/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,FormsModule
    ],
    declarations: [AppComponent, TabComponent, TabItemsDirective, TabItemDirective],
    bootstrap: [AppComponent]
})
export class AppModule { }