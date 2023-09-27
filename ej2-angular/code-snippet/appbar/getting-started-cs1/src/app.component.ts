

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<!-- To Render AppBar. -->
    <div class="control-container">
      <ejs-appbar colorMode="Primary">
        <button #regularBtn ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></button>
        <span class="regular" style="margin:0 5px">Angular AppBar</span>
        <div class="e-appbar-spacer"></div>
        <button ejs-button cssClass="e-inherit">FREE TRIAL</button>
      </ejs-appbar>
    </div>`,
})
export class AppComponent {}


