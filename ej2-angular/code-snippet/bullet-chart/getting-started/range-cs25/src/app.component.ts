


import { Component } from '@angular/core';
import { AnimationModel } from '@syncfusion/ej2-charts';

@Component({
    selector: 'app-container',
    template: `<ejs-bulletchart targetField='target' valueField='value' categoryField='category' [minimum]='minimum' [maximum]='maximum'
  [interval]='interval' [dataSource]='data' [animation]='animation' height='400' [categoryLabelStyle]='categoryLabelStyle'
title='Sales Rate'>
  <e-bullet-range-collection>
    <e-bullet-range end='35' color='darkred'></e-bullet-range>
    <e-bullet-range end='50' color='red'></e-bullet-range>
    <e-bullet-range end='75' color='blue'></e-bullet-range>
    <e-bullet-range end='90' color='lightgreen'></e-bullet-range>
    <e-bullet-range end='100' color='green'></e-bullet-range>
  </e-bullet-range-collection>
</ejs-bulletchart>`
})
export class AppComponent {
  public minimum: number = 0;
  public maximum: number = 100;
  public interval: number = 20;
  public data: Object[] = [
    { value: 55, target: 75, category: 'Year 1'  },
    { value: 70, target: 70, category: 'Year 2'  },
    { value: 85, target: 75, category: 'Year 3'  }
    ];
  public animation: AnimationModel = { enable: false };
  public categoryLabelStyle: Object = { color: 'red', size: '13', fontWeight: 'bold'};
}


