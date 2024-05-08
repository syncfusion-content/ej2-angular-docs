import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BulletChartModule} from '@syncfusion/ej2-angular-charts'




import { Component } from '@angular/core';

@Component({
imports: [
         BulletChartModule
    ],

providers: [ ],
standalone: true,
    selector: 'app-container',
    template: `<ejs-bulletchart valueField='value' targetField='target' title='Revenue'
                [minimum]='minimum' [maximum]='maximum' [interval]='interval' [dataSource]='data'>
                </ejs-bulletchart>`
})
export class AppComponent {
  public minimum: number = 0;
  public maximum: number = 300;
  public interval: number = 50;
  public data: Object[] = [
       { value: 270, target: 250 }
    ];
}


