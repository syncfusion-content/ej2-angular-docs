


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" enableRangeDrag='true' height='250px' width='250px'>
        <e-axes>
            <e-axis>
                <e-pointers>
                    <e-pointer value=50></e-pointer>
                </e-pointers>
				 <e-ranges>
                    <e-range start=0 end=100 startWidth=8 endWidth=8 color="#30B32D" radius='108%'></e-range>
                </e-ranges>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public animation?: Object;
    ngOnInit(): void { }
}



