

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render progress button. -->
               <button ejs-progressbutton content='Spin Left' [enableProgress]='true'></button></div>`
})

export class AppComponent {
}


