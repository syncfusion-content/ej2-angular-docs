import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TabComponent, TabItemsDirective, TabItemDirective } from '@syncfusion/ej2-angular-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
@NgModule({
    imports: [
        BrowserModule,FormsModule
    ],
    declarations: [AppComponent, TabComponent, TabItemsDirective, TabItemDirective, DropDownListComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }