import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
@NgModule({
    declarations: [AppComponent], imports: [BrowserModule, FormsModule, TextBoxModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }