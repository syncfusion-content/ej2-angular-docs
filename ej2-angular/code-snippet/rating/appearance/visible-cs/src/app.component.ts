import { Component, ViewChild } from '@angular/core';
import { RatingComponent } from '@syncfusion/ej2-angular-inputs';

@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                    <button id="btn" (click)="visible()">Visible</button>
                    <input ejs-rating #rating id="rating" value="3" visible="true" />
                </div>`
})

export class AppComponent {

  @ViewChild('rating')
  public rating?: RatingComponent;

  public visible() {
    this.rating!.visible = !this.rating?.visible;
  }
}
