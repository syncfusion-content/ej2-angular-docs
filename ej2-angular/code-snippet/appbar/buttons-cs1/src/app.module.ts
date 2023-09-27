import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppBarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, AppBarModule, ButtonModule, DropDownButtonModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }