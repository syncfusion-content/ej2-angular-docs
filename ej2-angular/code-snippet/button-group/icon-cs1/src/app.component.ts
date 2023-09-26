

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To render ButtonGroup. -->
               <div class='e-btn-group'>
                  <button ejs-button iconCss='e-icons e-left-icon'>Left</button>
                  <button ejs-button iconCss='e-icons e-middle-icon'>Right</button>
                  <button ejs-button iconCss='e-icons e-right-icon'>Middle</button>
                </div>`
})

export class AppComponent { }


