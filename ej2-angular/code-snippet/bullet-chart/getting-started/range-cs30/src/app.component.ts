


import { Component } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-bulletchart valueField='value' targetField='target' [minimum]='minimum' [maximum]='maximum'
  [interval]='interval' [dataSource]='data' [animation]='animation' title='Sales Rate' subtitle='(in dollars $)'
  titlePosition='Top'>
  <e-bullet-range-collection>
    <e-bullet-range end='35' color='#ebebeb'></e-bullet-range>
    <e-bullet-range end='70' color='#d8d8d8'></e-bullet-range>
    <e-bullet-range end='100' color='#7f7f7f'></e-bullet-range>
  </e-bullet-range-collection>
</ejs-bulletchart>`
})
export class AppComponent {
  public minimum: number = 0;
  public maximum: number = 100;
  public interval: number = 20;
  public data: Object[] = [
      { value: 55, target: 45 }
    ];
  public animation: AnimationModel = { enable: false };
}


