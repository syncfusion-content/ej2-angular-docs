import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RibbonModule, RibbonFileMenuService } from "@syncfusion/ej2-angular-ribbon";
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, RibbonModule ], // Registering EJ2 Ribbon Module.
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ RibbonFileMenuService ]
  })
export class AppModule { }