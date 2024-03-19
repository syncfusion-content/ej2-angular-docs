

import { Component } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';

// Load culture for textarea
L10n.load({
  'de-DE': {
      'textarea': {'placeholder': "Geben Sie Ihre Kommentare ein"}
    }
});

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <div class='textarea'>
                <ejs-textarea id='default' floatLabelType="Auto" locale="de-DE"></ejs-textarea>
                </div>
              </div>`
})

export class AppComponent { }


