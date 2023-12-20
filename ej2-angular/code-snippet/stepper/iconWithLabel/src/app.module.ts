import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// Import Syncfusion Stepper module from navigation package.
import {  StepperModule, StepperAllModule } from "@syncfusion/ej2-angular-navigations";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [BrowserModule, StepperAllModule, StepperModule ], // Registering EJ2 Stepper Module.
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}