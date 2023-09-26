

import { Component, OnInit } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-progressbar';

@Component({
    selector: 'my-app',
    template:
     `<ejs-progressbar  id='determinate' type='Circular' height='60' value=100  [animation]='animation'>
      </ejs-progressbar>
      <ejs-progressbar  id='indeterminate' type='Circular' height='60' value=20
       [isIndeterminate]='isIndeterminate' [animation]=' animation'>
      </ejs-progressbar>
     <ejs-progressbar  id='buffer' type='Circular' height='60' value=40  secondaryProgress=60
        [animation]=' animation'>
      </ejs-progressbar>
      <ejs-progressbar  id='segment' type='Circular' height='60' value=100  segmentCount=8
        [animation]=' animation'>
      </ejs-progressbar>`
})
export class AppComponent implements OnInit {
  public animation?: AnimationModel;
  public isIndeterminate?: boolean;
  ngOnInit(): void {
    this.animation = { enable: true, duration: 2000, delay: 0 };
    this.isIndeterminate = true;
  }
}



