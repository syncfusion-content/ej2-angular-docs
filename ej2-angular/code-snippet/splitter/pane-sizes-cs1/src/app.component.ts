


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <div id='container'>
         <ejs-splitter #plain height='200px' width='600'>
            <e-panes>
                <e-pane size='200px' content='<div class="content">Left pane</div>'>
                </e-pane>
                <e-pane size='200px' content='<div class="content">Middle pane</div>'>
                </e-pane>
                <e-pane size='200px' content='<div class="content">Right pane</div>'>
                </e-pane>
            </e-panes>
          </ejs-splitter>
      </div>`
})
export class AppComponent {
    constructor() {
    }
}



