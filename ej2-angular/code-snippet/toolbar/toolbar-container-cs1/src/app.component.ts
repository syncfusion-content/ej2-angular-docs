

import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `
        <ejs-toolbar>
          <div>
                <div><button class='e-btn e-tbar-btn'>Cut</button> </div>
                <div><button class='e-btn e-tbar-btn'>Copy</button> </div>
                <div><button class='e-btn e-tbar-btn'>Paste</button> </div>
                <div class='e-separator'> </div>
                <div><button class='e-btn e-tbar-btn'>Bold</button> </div>
                <div><button class='e-btn e-tbar-btn'>Italic</button> </div>
          </div>
        </ejs-toolbar>
        `
})

export class AppComponent {

}


