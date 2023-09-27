

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
    <h4>Floating label as auto</h4>
    <div class='textboxes'>
      <ejs-textbox placeholder="First Name" floatLabelType="Auto"></ejs-textbox>
    </div>

    <h4>Floating label as always</h4>
    <div class='textboxes'>
      <ejs-textbox placeholder="First Name" floatLabelType="Always"></ejs-textbox>
    </div>
  </div>`
})

export class AppComponent { }


