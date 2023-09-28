import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <input ejs-rating id="rating" value="3" [emptyTemplate]="emptyTemplate" />
                  
                  <ng-template #emptyTemplate>
                    <span class="custom-font sf-rating-heart"></span>
                  </ng-template>
                </div>`
})

export class AppComponent { }