

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<!-- To Render AppBar. -->
    <div class="control-container">
      <ejs-appbar colorMode="Primary">
        <button #defaultButtonHome ejs-button cssClass="e-inherit" iconCss="e-icons e-home"></button>
        <div class="e-appbar-spacer"></div>
        <button #defaultButtonCut ejs-button cssClass="e-inherit" iconCss="e-icons e-cut"></button>
        <div class="e-appbar-spacer"></div>
        <button #defaultButtonPan ejs-button cssClass="e-inherit" iconCss="e-icons e-pan"></button>
      </ejs-appbar>
    </div>`,
})
export class AppComponent {}


