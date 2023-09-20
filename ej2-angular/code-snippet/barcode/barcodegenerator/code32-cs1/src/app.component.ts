

import { Component } from "@angular/core";

@Component({
  selector: "app-container",
  // specifies the template string for the barcode generator component
  template: `<ejs-barcodegenerator style="display: block;" #barcode id="barcode" width="200px" height="150px"mode="SVG"  type="Code32" value="01234567"></ejs-barcodegenerator>`
})
export class AppComponent {}


