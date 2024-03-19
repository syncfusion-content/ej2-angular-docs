

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <div class='textarea'>
                  <div>
                      <ejs-textarea id='default1' placeholder="Success" floatLabelType="Auto" cssClass="e-success"></ejs-textarea>
                  </div>
                  <div>
                      <ejs-textarea id='default2' placeholder="Warning" floatLabelType="Auto" cssClass="e-warning"></ejs-textarea>
                  </div>
                </div>
              </div>`
})

export class AppComponent { }
