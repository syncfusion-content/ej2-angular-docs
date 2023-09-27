import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, CarouselModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }