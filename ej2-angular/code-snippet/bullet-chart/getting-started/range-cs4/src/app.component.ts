


import { Component } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-bulletchart valueField='value' targetField='target' title='Revenue' [minimum]='minimum' [maximum]='maximum'
  [interval]='interval' [dataSource]='data'  [animation]='animation' enableGroupSeparator=true>
  <e-bullet-range-collection>
    <e-bullet-range end='500' color='#ebebeb'></e-bullet-range>
    <e-bullet-range end='1000' color='#d8d8d8'></e-bullet-range>
    <e-bullet-range end='1500' color='#7f7f7f'></e-bullet-range>
  </e-bullet-range-collection>
</ejs-bulletchart>`
})
export class AppComponent {
  public minimum: number = 0;
  public maximum: number = 1500;
  public interval: number = 500;
  public data: Object[] = [
      { value: 1100, target: 950 }
    ];
  public animation: AnimationModel = { enable: false };
}


