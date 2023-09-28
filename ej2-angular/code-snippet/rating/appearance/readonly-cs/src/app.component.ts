import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                    <input ejs-rating id="rating" value="3" readOnly="true" />
                </div>`
})

export class AppComponent {}
