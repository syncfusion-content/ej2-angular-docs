


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-bulletchart valueName='value' targetName='target' title='Revenue'
                [minimum]='minimum' [maximum]='maximum' [interval]='interval' [dataSource]='data'
                [tooltip]='tooltip'>
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
  public tooltip: Object = {enable: true};
  public data: Object[] = [
      { value: 270, target: 250 }
    ];
}


