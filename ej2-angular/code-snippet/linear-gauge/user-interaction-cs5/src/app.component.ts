

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" style='display:block;' [tooltip]='tooltip'>
        <e-axes>
            <e-axis>
            <e-pointers>
               <e-pointer value=50 type="Bar" color="blue"></e-pointer>
             </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent implements OnInit {
    public tooltip?:Object;
    ngOnInit(): void {
        this.tooltip = {
          enable: true,
          position: "Center"
        };
    }
}


