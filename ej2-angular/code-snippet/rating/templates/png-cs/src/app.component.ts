import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <input ejs-rating id="rating" value="3" [emptyTemplate]="emptyTemplate" [fullTemplate]="fullTemplate" />

                  <ng-template #emptyTemplate>
                    <img width="20px" src="star-emptytemplate.png">
                  </ng-template>

                  <ng-template #fullTemplate>
                    <img width="20px" src="star-fulltemplate.png">  
                  </ng-template>
                </div>`
})

export class AppComponent {}
