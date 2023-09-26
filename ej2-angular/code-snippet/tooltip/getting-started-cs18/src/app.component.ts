

import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <ejs-tooltip id="tooltip" content='Tooltip content' [mouseTrail]='true'>
            <span>Show tooltip</span>
        </ejs-tooltip>
        `,
    styles: [`
        #tooltip {
            display: block;
            background-color: #cfd8dc;
            border: 3px solid #eceff1;
            box-sizing: border-box;
            margin: 80px auto;
            padding: 20px 0;
            width: 200px;
            text-align: center;
            color: #424242;
            font-size: 20px;
        }
    `]
})

export class AppComponent {
}



