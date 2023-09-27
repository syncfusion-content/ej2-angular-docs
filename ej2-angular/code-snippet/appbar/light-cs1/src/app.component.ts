

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<!-- To Render AppBar. -->
    <div class="control-container">
      <ejs-appbar>
        <a href="https://www.syncfusion.com/angular-components" target="_blank" rel="noopener" role="link" aria-label="Syncfusion angular controls">
           <div class="syncfusion-logo"></div>
        </a>
        <div class="e-appbar-spacer"></div>
        <button #defaultButtonLogin ejs-button isPrimary=true>FREE TRIAL</button>
      </ejs-appbar>
    </div>`,
})
export class AppComponent {}


