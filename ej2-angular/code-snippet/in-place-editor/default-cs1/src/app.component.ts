

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <div id='container'>
            <span class="content-title"> Enter your name: </span>
            <ejs-inplaceeditor #element id="element" mode="Inline" value="Andrew" enableRtl=true></ejs-inplaceeditor>
        </div>
    `
})

export class AppComponent {
}


