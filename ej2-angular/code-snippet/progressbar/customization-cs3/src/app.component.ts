

import { Component, OnInit } from '@angular/core';
import { AnimationModel, FontModel } from '@syncfusion/ej2-progressbar';
@Component({
    selector: 'my-app',
    template:
    `<ejs-progressbar #linear id='linear' [type]='type' [maximum]='max' [minimum]='min' [value]='value' [width]='width' [height]='height'></ejs-progressbar>`
})
export class AppComponent implements OnInit {
    public type?: string;
    public width?: string;
    public height?: string;
    public min?: number;
    public max?: number;
    public value?: number;
    public animation?: AnimationModel;
    ngOnInit(): void {
      this.type = "Linear";
      this.width = "100%";
      this.height = "60";
      this.min = 0;
      this.max = 100;
      this.value = 70;
    }
}


