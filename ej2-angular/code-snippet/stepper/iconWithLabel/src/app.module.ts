import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// Import Syncfusion Ribbon module from ribbon package.
import {  StepperModule, StepperAllModule } from "@syncfusion/ej2-angular-ribbon";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, StepperAllModule, StepperModule ], // Registering EJ2 Ribbon Module.
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}