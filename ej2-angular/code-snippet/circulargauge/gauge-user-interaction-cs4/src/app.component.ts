import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CircularGaugeModule } from '@syncfusion/ej2-angular-circulargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-circulargauge'




import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         CircularGaugeModule
    ],

providers: [GaugeTooltipService],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-circulargauge id="circular-container" [tooltip]="tooltip" enablePointerDrag=true>
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
        // Initialize objects.
        this.tooltip = {
            enable: true,
            template: '<div id="templateWrap"><div style="float: right; padding-left:10px; line-height:30px;"><span>Pointer &nbsp;&nbsp;:&nbsp; ${Math.round(pointers[0].value)}</span></div></div>'
        };
    }

}



