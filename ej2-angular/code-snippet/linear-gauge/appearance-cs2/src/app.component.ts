

import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
    <ejs-lineargauge id="gauge-container" title='Speedometer' [titleStyle]='titleStyle'>
    </ejs-lineargauge>`
})
export class AppComponent {
    public titleStyle?: Object;
    ngOnInit(): void {
      this.titleStyle = {
        fontFamily: "Arial",
        fontStyle: 'italic',
        fontWeight: 'regular',
        color: "#E27F2D",
        size: '23px'
      };
    }
}


