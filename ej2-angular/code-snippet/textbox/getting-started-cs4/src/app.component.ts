


import { Component } from '@angular/core';
import { Input } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'app-root',
    template: `<div class="wrap">
                <h4> FloatLabelType as Auto </h4>
                <input type="text" id="textbox" required/>
                <h4> FloatLabelType as Always </h4>
                <input type="text" id="textbox-01" required/>
                <h4> FloatLabelType as Never </h4>
                <input type="text" id="textbox-02" required/>
                <h4> Float label input with icons </h4>
                <input id="textbox-icon" type="text" />
              </div>`
})

export class AppComponent {
    ngOnInit() {
        let element: HTMLInputElement = document.getElementById('textbox') as HTMLInputElement;
        Input.createInput ({
            element: element,
            floatLabelType: "Auto",
            properties: {
                placeholder:'Enter Name'
            }
        });
        let element1: HTMLInputElement = document.getElementById('textbox-01') as HTMLInputElement;
        Input.createInput ({
            element: element1,
            floatLabelType: "Always",
            properties: {
                placeholder:'Enter Name'
            }
        });
        let element2: HTMLInputElement = document.getElementById('textbox-02') as HTMLInputElement;
        Input.createInput ({
            element: element2,
            floatLabelType: "Never",
            properties: {
                placeholder:'Enter Name'
            }
        });

        let element3: HTMLInputElement = document.getElementById('textbox-icon') as HTMLInputElement;
        Input.createInput ({
            element: element3,
            floatLabelType: "Auto",
            buttons: ['e-input-group-icon e-input-down'],
            properties: {
                placeholder:'Enter Value'
            }
        });
    }
}



