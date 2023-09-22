


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" [tooltip]="tooltip">
        <e-axes>
            <e-axis>
                <e-pointers>
                    <e-pointer value=70></e-pointer>
                </e-pointers>
            </e-axis>
        </e-axes>
    </ejs-circulargauge>`
})
export class AppComponent implements OnInit {
    public tooltip?: Object;
    ngOnInit(): void {
        // Initialize objects
        this.tooltip = {
            enable: true,
            template: '<div id="templateWrap"><div style="float: right; padding-left:10px; line-height:30px;"><span>Pointer &nbsp;&nbsp;:&nbsp; ${Math.round(pointers[0].value)}</span></div></div>'
        };
    }

}



