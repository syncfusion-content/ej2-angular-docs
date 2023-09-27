

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-lineargauge id="gauge-container" style='display:block;' height='350'>
        <e-axes>
            <e-axis>
            <e-pointers>
               <e-pointer value=80 [enableDrag]=true></e-pointer>
             </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-lineargauge>`
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
    }
}


