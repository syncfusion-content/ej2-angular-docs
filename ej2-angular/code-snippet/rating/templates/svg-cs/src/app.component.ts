import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<!-- To Render Rating component. -->
                <div class="wrap">
                  <input ejs-rating id="rating" value="4" [emptyTemplate]="emptyTemplate" [fullTemplate]="fullTemplate" enableAnimation="false" />

                  <ng-template #emptyTemplate let-data="">
                      <svg width="35" height="25" class="e-rating-svg-icon">
                          <rect width="35" height="25" fill="transparent" style="stroke-width:2;stroke:rgb(173,181,189)"/>
                      </svg>
                  </ng-template>

                  <ng-template #fullTemplate let-data="">
                      <svg width="35" height="25" class="e-rating-svg-icon">
                          <defs>
                              <linearGradient id="grad{{data.index}}" x1="0%" y1="0%" x2="100%" y2="0%">
                                  <stop class="start" offset="0%" />
                                  <stop class="end" offset="100%" />
                              </linearGradient>
                          </defs>
                          <rect width="35" height="25" style="fill:url(#grad{{data.index}});stroke-width:2;stroke:rgb(173,181,189)"/>
                      </svg>
                  </ng-template>
                </div>`
})

export class AppComponent { }