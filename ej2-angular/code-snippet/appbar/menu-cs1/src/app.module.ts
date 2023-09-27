import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppBarModule, MenuModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, AppBarModule, ButtonModule, MenuModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }