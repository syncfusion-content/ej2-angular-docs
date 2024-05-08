import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BulletChartModule } from '@syncfusion/ej2-angular-charts'




import { Component } from '@angular/core';

@Component({
imports: [
         BulletChartModule
    ],

providers: [ ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-bulletchart valueField='value' targetField='target'
                [minimum]='minimum' [maximum]='maximum' [interval]='interval' [dataSource]='data'>
                </ejs-bulletchart>`
})
export class AppComponent {
  public minimum: number = 0;
  public maximum: number = 300;
  public interval: number = 50;
  public data: Object[] = [
       { value: 100, target: 80 },
       { value: 200, target: 180 },
       { value: 300, target: 280 },
       { value: 400, target: 380 },
       { value: 500, target: 480 },
    ];
}


