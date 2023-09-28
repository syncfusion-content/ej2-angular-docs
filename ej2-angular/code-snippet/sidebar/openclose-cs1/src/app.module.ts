import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { AppComponent } from './app.component';

@NgModule({
    imports: [SidebarModule, BrowserModule],
declarations: [AppComponent],
bootstrap: [AppComponent]
})
export class AppModule { }