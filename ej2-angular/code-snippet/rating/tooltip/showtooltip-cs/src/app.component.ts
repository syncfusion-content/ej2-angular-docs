import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <input ejs-rating id="rating" showTooltip="true" value="3"  />
                </div>`
})

export class AppComponent { }