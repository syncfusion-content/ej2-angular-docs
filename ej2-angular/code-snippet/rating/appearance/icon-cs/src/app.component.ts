import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                    <input ejs-rating id="rating" value="3" cssClass="custom-icon" />
                </div>`
})

export class AppComponent {}
