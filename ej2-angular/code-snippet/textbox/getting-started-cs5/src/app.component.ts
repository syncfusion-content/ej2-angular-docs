


import { Component } from '@angular/core';
import { Input } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <input id="textbox" type="text" placeholder="Enter Name" />
                <input id="textbox-icon" type="text" />
               </div>`
})

export class AppComponent {
    ngOnInit() {
        let element: HTMLInputElement = document.getElementById('textbox') as HTMLInputElement;
        Input.createInput ({
            element: element
        });

        let element1: HTMLInputElement = document.getElementById('textbox-icon') as HTMLInputElement;
        Input.createInput ({
            element: element1,
            buttons: ['e-input-group-icon e-input-down'],
            properties: {
                placeholder:'Enter Value'
            }
        });
    }
}



