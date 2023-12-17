

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `<div class="e-section-control">
                <!-- To render ButtonGroup. -->
               <div class='e-btn-group'>
                 <button ejs-button cssClass='e-info'>View</button>
                 <button ejs-button>Edit</button>
                 <button ejs-button cssClass='e-danger'>Delete</button>
               </div>
               </div>`
})

export class AppComponent { }


