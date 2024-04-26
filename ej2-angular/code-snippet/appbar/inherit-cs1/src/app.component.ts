import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppBarModule } from '@syncfusion/ej2-angular-navigations'
import { ButtonModule } from '@syncfusion/ej2-angular-buttons'



import { Component } from "@angular/core";

@Component({
imports: [ AppBarModule, ButtonModule],


standalone: true,
  selector: "app-root",
  template: `<!-- To Render AppBar. -->
    <div class="control-container">
      <ejs-appbar colorMode="Inherit">
        <a href="https://www.syncfusion.com/angular-components" target="_blank" rel="noopener" role="link" aria-label="Syncfusion angular controls">
           <div class="syncfusion-logo"></div>
        </a>
        <div class="e-appbar-spacer"></div>
        <button #defaultButtonLogin ejs-button isPrimary=true>FREE TRIAL</button>
      </ejs-appbar>
    </div>`,
})
export class AppComponent {}


