import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule, RadioButtonModule  } from '@syncfusion/ej2-angular-buttons';
import { AppComponent } from './app.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule,
        SidebarModule, ButtonModule, RadioButtonModule 
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }