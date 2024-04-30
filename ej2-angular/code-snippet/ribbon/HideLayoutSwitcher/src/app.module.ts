import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon';
import { AppComponent } from './app.component';
import { CheckBoxModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
    imports: [BrowserModule, RibbonModule, CheckBoxModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }