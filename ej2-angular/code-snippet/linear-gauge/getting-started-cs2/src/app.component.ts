import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { LinearGaugeModule } from '@syncfusion/ej2-angular-lineargauge'
import { GaugeTooltipService } from '@syncfusion/ej2-angular-lineargauge'




import { Component, OnInit } from '@angular/core';

@Component({
imports: [
         LinearGaugeModule
    ],

providers: [ GaugeTooltipService ],
standalone: true,
    selector: 'app-container',
    template:
    `<ejs-lineargauge id="gauge-container" [title]='Title'>
    </ejs-lineargauge>`
})
export class AppComponent implements OnInit {
    public Title?: string;
    ngOnInit(): void {
        // Title for linear gauge
        this.Title = 'linear gauge';
    }
}



