


import { Component } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-bulletchart valueField='value' targetField='target' title='Revenue' [minimum]='minimum' [maximum]='maximum'
  [interval]='interval' [dataSource]='data'  [animation]='animation' [majorTickLines] ='majorTickLines' [minorTickLines]='minorTickLines'>
  <e-bullet-range-collection>
    <e-bullet-range end='100' color='#ebebeb'></e-bullet-range>
    <e-bullet-range end='200' color='#d8d8d8'></e-bullet-range>
    <e-bullet-range end='300' color='#7f7f7f'></e-bullet-range>
  </e-bullet-range-collection>
</ejs-bulletchart>`
})
export class AppComponent {
  public minimum: number = 0;
  public maximum: number = 300;
  public interval: number = 50;
  public data: Object[] = [
      { value: 270, target: 250 }
    ];
  public majorTickLines: Object = { color: 'blue', width: 5 };
  public minorTickLines: Object = { color: 'red', width: 5 };
animation: any;
}


