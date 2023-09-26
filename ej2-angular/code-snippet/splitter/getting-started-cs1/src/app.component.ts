


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <div id='container'>
          <ejs-splitter #horizontal height='250px' width='600px'>
            <e-panes>
                <e-pane></e-pane>
                <e-pane></e-pane>
                <e-pane></e-pane>
            </e-panes>
          </ejs-splitter>
    </div>`
})
export class AppComponent {
    constructor() {
    }
}



