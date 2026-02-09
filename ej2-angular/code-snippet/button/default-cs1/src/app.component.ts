import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { Component } from '@angular/core';

@Component({
    imports: [ButtonModule],
    standalone: true,
    selector: 'app-root',
    template: `<div class="e-section-control">
        <!-- To render Button. -->
        <button ejs-button>Button</button></div>`
})

export class AppComponent { }
