

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<button ejs-progressbutton content='Vertical Progress' [enableProgress]='true' cssClass='e-hide-spinner e-vertical' [duration]='4000'></button>
    <button ejs-progressbutton content='Progress Top' [enableProgress]='true' cssClass='e-hide-spinner e-progress-top' [duration]='4000'></button>
    <button ejs-progressbutton content='Reverse Progress' [enableProgress]='true' cssClass='e-hide-spinner e-reverse-progress' [duration]='4000'></button>`
})

export class AppComponent {
}


