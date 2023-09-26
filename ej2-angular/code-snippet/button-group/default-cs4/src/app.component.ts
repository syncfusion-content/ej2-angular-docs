

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To render ButtonGroup. -->
               <div class='e-btn-group'>
                    <button ejs-button>HTML</button>
                    <button ejs-button [disabled]="true">CSS</button>
                    <button ejs-button>Javascript</button>
                </div>
                <div class='e-btn-group'>
                    <button ejs-button [disabled]="true">HTML</button>
                    <button ejs-button [disabled]="true">CSS</button>
                    <button ejs-button [disabled]="true">Javascript</button>
                </div>`
})

export class AppComponent { }


