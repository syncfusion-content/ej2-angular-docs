


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container">
        <e-axes>
            <e-axis [lineStyle]="lineStyle">
                <e-ranges>
                    <e-range start=0 end=50 radius="108%"></e-range>
                    <e-range start=50 end=100 radius="108%"></e-range>
                </e-ranges>
                <e-pointers>
                    <e-pointer value=50 type="RangeBar" roundedCornerRadius=6></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
   public lineStyle?: Object;
   ngOnInit(): void {
        // Initialize objects
		this.lineStyle = {
            color: 'transparent'
        };
    }
}



