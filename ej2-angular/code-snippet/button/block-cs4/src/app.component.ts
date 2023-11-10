

import { Component, ViewChild, OnInit } from '@angular/core';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';

@Component({
    selector: 'app-root',
    styleUrls:['./style.css'],
    template:`<div class="e-section-control">
              <button #btn ejs-button [isPrimary]="true">Button</button></div>`
})

export class AppComponent implements OnInit {
  @ViewChild('btn')
  private btn: ButtonComponent| any;
  ngOnInit() {
    this.btn.element.setAttribute("title", "Primary Button")
  }
}


