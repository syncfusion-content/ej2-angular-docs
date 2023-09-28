

import { Component } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'de-DE': {
        'colorpicker': {
            'Apply': 'Anwenden',
            'Cancel': 'Abbrechen',
            'ModeSwitcher': 'Modus wechseln'
        }
    }
});

@Component({
    selector: 'app-root',
    template: `<h4>Choose Color</h4>
               <ejs-input ejs-colorpicker type="color" id="element" locale="de-DE" />`
})

export class AppComponent { }


