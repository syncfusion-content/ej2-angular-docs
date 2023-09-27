

import { Component } from '@angular/core';
import { OpenEventArgs } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'app-root',
    template: `<h4>Choose Color</h4>
               <!-- custom picker -->
               <ejs-input ejs-colorpicker type="color" id="element" value="#344aae" cssClass="e-custom-picker" [modeSwitcher]="false" (open)="onOpen($event)" />`
})

export class AppComponent {
    onOpen(args: OpenEventArgs): void {
        (args.element.querySelector('.e-handler') as Element).classList.add('e-icons');
    }
}


