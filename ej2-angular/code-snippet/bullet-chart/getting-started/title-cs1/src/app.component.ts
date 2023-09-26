


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-bulletchart valueName='value' targetName='target' title='Revenue'
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


