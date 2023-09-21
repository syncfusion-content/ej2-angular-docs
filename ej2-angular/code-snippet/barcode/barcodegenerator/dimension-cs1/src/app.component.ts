

import { Component } from "@angular/core";

@Component({
  selector: "app-container",
  // specifies the template string for the barcode generator component
  template: `<ejs-barcodegenerator style="display: block;" #barcode id="barcode" width="300px"  height="300px"mode="SVG" type="Code128" value="SYNCFUSION"></ejs-barcodegenerator>`
})
export class AppComponent {}


