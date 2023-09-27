import { Component } from '@angular/core';
import { RatingChangedEventArgs } from '@syncfusion/ej2-angular-inputs';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <input ejs-rating id='rating' (valueChanged)="valueChanged($event)"/><br />
                </div>`
})

export class AppComponent {
  public valueChanged(args: RatingChangedEventArgs) {
    alert("Previous Value:" + args.previousValue + "\nValue:" + args.value);
  };
}