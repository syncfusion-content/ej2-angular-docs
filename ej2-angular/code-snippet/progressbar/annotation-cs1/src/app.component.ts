

import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'my-app',
    template:
   ` <ejs-progressbar  id='percentage' type='Circular' trackColor='#FFD939' cornerRadius='Round'
       innerRadius='190%' [trackThickness]='trackThickness'
      >
      <e-progressbar-annotations>
        <e-progressbar-annotation
          content='<div id="point1" style="font-size:20px;font-weight:bold;color:#ffffff;fill:#ffffff"><span>60%</span></div>'>
        </e-progressbar-annotation>
       </e-progressbar-annotations>
     </ejs-progressbar>`
})
export class AppComponent implements OnInit {
    public trackThickness?: number;
    ngOnInit(): void {
        this.trackThickness = 80;
    }
}


