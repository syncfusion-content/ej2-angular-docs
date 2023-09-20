

import { Component } from "@angular/core";

@Component({
  selector: "app-container",
  // specifies the template string for the barcode generator component
  template: `<ejs-qrcodegenerator style="display: block;"  #barcode id="barcode" width="300px" height="300px" mode="SVG" value="Syncfusion"></ejs-qrcodegenerator>`
})
export class AppComponent {}


