

import { Component } from '@angular/core';
import { SpinSettingsModel } from '@syncfusion/ej2-angular-splitbuttons';

@Component({
    selector: 'app-root',
    template: `<!-- To render progress button. -->
               <button ejs-progressbutton content='Submit' [spinSettings]='spinSettings'></button>`
})

export class AppComponent {
    public spinSettings : SpinSettingsModel = { position: 'Right', width: 20, template: '<div class="template"></div>'  };
}


