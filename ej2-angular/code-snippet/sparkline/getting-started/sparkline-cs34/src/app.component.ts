import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { SparklineModule, SparklineTooltipService } from '@syncfusion/ej2-angular-charts'



import { Component } from '@angular/core';

@Component({
imports: [
         SparklineModule
    ],

providers: [SparklineTooltipService],
standalone: true,
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='130px' height='150px' type='WinLoss'  valueType= 'Numeric' tiePointColor='blue' [dataSource]="data" >
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [
        12, 15, -10, 13, 15, 6, -12, 17, 13, 0, 8, -10
    ] as any;
};


