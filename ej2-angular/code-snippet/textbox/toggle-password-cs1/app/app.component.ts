

import { Component, Inject, ViewChild } from '@angular/core';
import {
  TextBoxComponent,
  NumericTextBoxComponent,
} from '@syncfusion/ej2-angular-inputs';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  @ViewChild('default', { static: true })
  public textbox?: TextBoxComponent;
  ngAfterViewInit() {
    (this.textbox as TextBoxComponent).addIcon('append', 'e-icons e-eye');
    document
      .getElementsByClassName('e-input-eye')[0]
      .addEventListener('click', function (e) {
        let textObj: any = (document.getElementById('password') as any)
          .ej2_instances[0];
        if (textObj.element.type === 'password') {
          textObj.element.type = 'text';
        } else {
          textObj.element.type = 'password';
        }
      });
  }
}


