import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { CarouselModule } from '@syncfusion/ej2-angular-navigations';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, ButtonModule, CarouselModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }