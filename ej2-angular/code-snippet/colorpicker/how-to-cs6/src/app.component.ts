

import { Component } from '@angular/core';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'ar-AE': {
        'colorpicker': {
            'Apply': 'تطبيق',
            'Cancel': 'إلغاء',
            'ModeSwitcher': 'مفتاح كهربائي الوضع'
        }
    }
});

@Component({
    selector: 'app-root',
    template: `<h4>Choose Color</h4>
               <ejs-input ejs-colorpicker type="color" id="element" [enableRtl]="true" locale="ar-AE" />`
})

export class AppComponent { }


