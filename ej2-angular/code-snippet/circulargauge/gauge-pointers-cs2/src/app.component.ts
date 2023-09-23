


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis>
                <e-pointers>
                    <e-pointer value=90 radius="50%" [cap]="cap" [needleTail]="needleTail"></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public cap?: Object;
    public needleTail?: Object;
    ngOnInit(): void {
        // Initialize objects
        this.cap= {
            radius: 10
        };
        this.needleTail= {
            length: '25%'
        };
    }
}



