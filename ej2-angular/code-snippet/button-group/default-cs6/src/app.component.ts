

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<!-- To render ButtonGroup with RTL. -->
               <div class='e-btn-group e-rtl'>
                   <button ejs-button>HTML</button>
                   <button ejs-button>CSS</button>
                   <button ejs-button>Javascript</button>
               </div>`
})

export class AppComponent { }


