import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <input ejs-rating id="rating" value="3" showLabel="true" [labelTemplate]="labelTemplate" />
                  
                  <ng-template #labelTemplate let-data="">
                      <span>{{data.value}} out of 5</span>
                  </ng-template>
                </div>`
})

export class AppComponent { }