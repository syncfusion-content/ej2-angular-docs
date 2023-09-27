

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
     <ejs-lineargauge id="gauge-container" [margin]='margin' [allowMargin]='isMargin'  orientation="Horizontal" background="skyblue" [border]='border'>
      <e-axes>
        <e-axis>
          <e-pointers>
            <e-pointer type="Bar" value=50>
            </e-pointer>
          </e-pointers>
        </e-axis>
      </e-axes>
    </ejs-lineargauge>`
})

export class AppComponent implements OnInit {
    public border?: Object;
    public margin?: Object;
    public isMargin?: boolean;
    ngOnInit(): void {
      this.isMargin = false;
      this.margin = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      this.border = {
        width:3,
        color: "red"
      };
    }
}


