import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams'



import { Component } from "@angular/core";

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
  selector: "app-container",
  // specifies the template string for the diagram component
  template: `<ejs-diagram id="diagram" width="100%" height="580px"></ejs-diagram>`
})
export class AppComponent {}


