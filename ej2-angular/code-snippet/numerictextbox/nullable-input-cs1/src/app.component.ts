

import{Component, ViewChild}from'@angular/core';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector:'app-root',
    // specifies the template string for the NumericTextBox component
    template:`
      <ejs-numerictextbox #numeric=""  id="numeric" placeholder= 'NumericTextBox' floatLabelType= 'Always' (created)="onCreate($event)"  (blur)="onBlur($event)" ></ejs-numerictextbox>
      `
})
  export class AppComponent {
   @ViewChild('numeric') public numeric?: NumericTextBoxComponent | any;
   public onCreate(args: any) {
    if (this.numeric.value == null) {
      this.numeric.value = 0;
    }
   }
   public onBlur(args: any) {
     if(args.value == null) {
      this.numeric.value = 0;
     }
   }
   constructor() {
   }
}



