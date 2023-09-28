

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<!-- To Render AppBar. -->
    <div class="control-container">
      <ejs-appbar colorMode="Primary">
        <button #defaultButtonMenu ejs-button cssClass="e-inherit" iconCss="e-icons e-menu"></button>
        <div class="e-appbar-spacer"></div>
        <button #defaultButtonLogin ejs-button cssClass="e-inherit">FREE TRIAL</button>
      </ejs-appbar>
      <div class="appbar-content" style="font-size: 12px">
        <p>
            The AppBar also known as action bar or nav bar displays information and actions related to the current application screen. It is used to show branding, screen titles, navigation, and actions. The control supports height mode, color mode, positioning, and more.
        </p>
        <p>
            The AppBar control provides flexible ways to configure the look and feel of the bar to match your requirement.
        </p>
        <p>
            Developers can control the appearance and behaviors of the AppBar using a rich set of APIs.
        </p>
        <p>
            The AppBar component supports built-in themes such as Material, Bootstrap, Fabric (Office 365), Tailwind CSS, and high contrast. Users can customize these built-in themes or create new themes to achieve their desired look and feel by either simply overriding SASS variables or using our Theme Studio application.
        </p>
      </div>
    </div>`,
})
export class AppComponent {}


