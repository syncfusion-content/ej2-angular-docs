


import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `<ejs-sparkline id='container' width='350px' height='200px' [padding]= 'padding' [border]= 'border' [containerArea]='containerArea' [dataSource]="data" fill= '#b2cfff' type="Area">
    </ejs-sparkline>`
})
export class AppComponent {
    public data: object[] = [3, 6, 4, 1, 3, 2, 5] as any;
    public containerArea: object= {
        border: { color: '#033e96', width: 2 },
        background: '#eff1f4',
    };
    public  padding: object= { left: 20, right: 20, bottom: 20, top: 20};
    public border: object= { color: '#033e96', width: 1 };
}



