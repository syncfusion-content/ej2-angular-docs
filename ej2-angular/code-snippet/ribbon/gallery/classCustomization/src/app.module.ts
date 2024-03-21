import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RibbonModule } from '@syncfusion/ej2-angular-ribbon';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, RibbonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }