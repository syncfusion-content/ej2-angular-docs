


import { Component, ViewChild } from '@angular/core';
import { Animation } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <p><b>Smaller Icons</b></p>
      <div class="small-icon-bar">
        <span class="e-icons e-small e-cut"></span>
        <span class="e-icons e-small e-copy"></span>
        <span class="e-icons e-small e-paste"></span>
      </div>
      <p><b>Medium Icons</b></p>
      <div class="medium-icon-bar">
        <span class="e-icons e-medium e-cut"></span>
        <span class="e-icons e-medium e-copy"></span>
        <span class="e-icons e-medium e-paste"></span>
      </div>
      <p><b>Larger Icons</b></p>
      <div class="large-icon-bar">
        <span class="e-icons e-large e-cut"></span>
        <span class="e-icons e-large e-copy"></span>
        <span class="e-icons e-large e-paste"></span>
      </div>
    </div>
  `
})

export class AppComponent {

}


