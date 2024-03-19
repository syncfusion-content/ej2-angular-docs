

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <div class='textarea'>
                <div>
                  <ejs-textarea id="default1" placeholder="Enter your comments" floatLabelType="Auto" rowsCount="3" columnsCount="35"></ejs-textarea>
                </div>
                <div>
                  <ejs-textarea id="default2" placeholder="Enter your comments" floatLabelType="Auto" rowsCount="5" columnsCount="40"></ejs-textarea>
                </div>
                </div>
              </div>`
})

export class AppComponent { }


