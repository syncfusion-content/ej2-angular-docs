

import { Component ,ViewChild} from "@angular/core";
import { BarcodeGeneratorComponent,DisplayTextModel } from '@syncfusion/ej2-angular-barcode-generator';

@Component({
  selector: "app-container",
  // specifies the template string for the barcode generator component
  template: `<ejs-qrcodegenerator style="display: block;"  #barcode id="barcode" width="200px" height="150px" [displayText] = 'displayText' mode="SVG" value="Syncfusion"></ejs-qrcodegenerator>`
})
  export class AppComponent {
    // @ViewChild('barcode')
    @ViewChild('displayText')
    public displayText?: DisplayTextModel;
    ngOnInit(): void {  

      this.displayText = {
        text:'text'
      }
    }
  }


