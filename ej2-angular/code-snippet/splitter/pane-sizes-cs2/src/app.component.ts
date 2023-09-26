


import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <div id='container'>
         <ejs-splitter #plain height='200px' width='600'>
            <e-panes>
                <e-pane size='30%' content='<div class="content">Left pane</div>'>
                </e-pane>
                <e-pane size='40%' content='<div class="content">Middle pane</div>'>
                </e-pane>
                <e-pane size='30%' content='<div class="content">Right pane</div>'>
                </e-pane>
            </e-panes>
          </ejs-splitter>
      </div>`
})
export class AppComponent {
    constructor() {
    }
}



