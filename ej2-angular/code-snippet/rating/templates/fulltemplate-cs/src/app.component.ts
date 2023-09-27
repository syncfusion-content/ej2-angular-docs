import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <input ejs-rating id="rating" value="3" [emptyTemplate]="emptyTemplate" [fullTemplate]="fullTemplate" />

                  <ng-template #emptyTemplate>
                    <span class="custom-font sf-icon-empty-star"></span>
                  </ng-template>

                  <ng-template #fullTemplate>
                    <span class="custom-font sf-icon-fill-star"></span>
                  </ng-template>
                </div>`
})

export class AppComponent { }