

import { Component, OnInit } from '@angular/core';
import { loadCldr,L10n } from '@syncfusion/ej2-base';

@Component({
    selector: 'app-root',
    // specifies the template string for the DropDownList component with change event
    // sets `German` culture using the culture value 'de'
    // sets the 'EUR' currency format
    template: `<ejs-numerictextbox locale='ar-AE' placeholder='أدخل القيمة' floatLabelType='Auto' enableRtl='true' value='100'></ejs-numerictextbox>`
})
export class AppComponent implements onInit {
    constructor() {
    }
    ngOnInit(): void {
        // Load `German` culture to override spin buttons tooltip text
        L10n.load({
            'ar-AE': {
            'numerictextbox': {
                    incrementTitle: 'قيمة الزيادة', decrementTitle: 'قيمة تناقص'
                }
           }
        });
    }
}



