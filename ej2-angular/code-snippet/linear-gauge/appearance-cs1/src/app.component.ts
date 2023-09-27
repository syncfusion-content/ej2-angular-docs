

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" background='skyblue' [border]='border' [margin]='margin'>
    </ejs-lineargauge>`
})
export class AppComponent {
    public border?: Object;
    public margin?: Object;
    ngOnInit(): void {
      this.border = { color: "#FF0000", width: 2 };
      this.margin = { left: 20, top: 20, right: 20, bottom: 20}
    }
}


