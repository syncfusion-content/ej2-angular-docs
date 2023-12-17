

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render ButtonGroup. -->
                <div class='e-btn-group e-outline'>
                  <button ejs-button cssClass='e-outline'>HTML</button>
                  <button ejs-button cssClass='e-outline'>CSS</button>
                  <button ejs-button cssClass='e-outline'>Javascript</button>
                </div>
              </div>`
})

export class AppComponent { }


