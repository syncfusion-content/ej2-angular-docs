

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<!-- To Render AppBar. -->
    <div class="control-container">
      <ejs-appbar colorMode="Primary" cssClass="custom-appbar">
        <button #defaultButtonMenu ejs-button cssClass="e-inherit" iconCss="e-icons e-home"></button>
      </ejs-appbar>
    </div>`,
})
export class AppComponent {}


