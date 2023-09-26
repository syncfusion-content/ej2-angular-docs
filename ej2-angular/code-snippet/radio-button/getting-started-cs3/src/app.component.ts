


import { Component, ViewChild } from '@angular/core';
import { ChangeEventArgs, RadioButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    // To customize RadioButton appearance
    template: `<ul>
                  <li>
                      <div id="text">Selected : Option 1</div>
                  </li>
                  <li>
                      <ejs-radiobutton #radio1 label="Option 1" name="default" checked="true" (change)='changeOption1($event)'></ejs-radiobutton>
                  </li>
                  <li>
                      <ejs-radiobutton #radio2 label="Option 2" name="default"  disabled="true" (change)='changeOption2($event)'></ejs-radiobutton>
                  </li>
                  <li>
                      <ejs-radiobutton #radio3 label="Option 3" name="default" (change)='changeOption3($event)'></ejs-radiobutton>
                  </li>
               </ul>`
})

export class AppComponent {
    @ViewChild('radio1')
    public radio1?: RadioButtonComponent;
    @ViewChild('radio2')
    public radio2?: RadioButtonComponent;
    @ViewChild('radio3')
    public radio3?: RadioButtonComponent;
    public changeOption1 (args: ChangeEventArgs) {
        document.getElementById('text')!.innerText = 'Selected : ' + this.radio1!.label;
    }
    public changeOption2 (args: ChangeEventArgs) {
        document.getElementById('text')!.innerText = 'Selected : ' + this.radio2!.label;
    }
    public changeOption3 (args: ChangeEventArgs) {
        document.getElementById('text')!.innerText = 'Selected : ' + this.radio3!.label;
    }
}



