

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div id='container' style="display: inline-block; position: relative; left: 50%;top: 100px;transform: translateX(-50%);">
        <ejs-tooltip id='tooltip' content='Tooltip content' target="#target">
            <button ejs-button id="target">Show Tooltip</button>
        </ejs-tooltip>
    </div>`,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent  { }


