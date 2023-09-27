


import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div id='container'>
        <div class='wrap'>
            <ejs-slider id='slider' [value]=30></ejs-slider>
        </div>
    </div>`,
    styleUrls:['./index.css'],
})

export class AppComponent {
}



