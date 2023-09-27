


import { Component } from '@angular/core';
import { ToolbarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `
        <ejs-toolbar>
          <e-items>
             <e-item text='Cut'></e-item>
             <e-item text='Copy'></e-item>
             <e-item type='Separator'></e-item>
             <e-item text='Paste'></e-item>
             <e-item type='Separator'></e-item>
             <e-item >
            <ng-template #template>
                <div>
                  <a
                    target="_blank"
                    href="https://ej2.syncfusion.com/angular/documentation/toolbar/getting-started/"
                    >Anchor Toolbar Link</a
                  >
                </div>
            </ng-template>
            </e-item>
          </e-items>
        </ejs-toolbar>
        `
})

export class AppComponent {

}



