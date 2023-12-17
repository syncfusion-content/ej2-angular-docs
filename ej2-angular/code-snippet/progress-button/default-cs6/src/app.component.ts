

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <button ejs-progressbutton content='Progress' cssClass='e-hide-spinner' [enableProgress]='true'></button></div>`
})

export class AppComponent {
}


