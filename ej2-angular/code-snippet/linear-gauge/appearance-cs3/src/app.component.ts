

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" [container]='container'>
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
    public container?: Object;
    ngOnInit(): void {
        this.container = {
          width:30
      };
    }
}


