

import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-container',
    template: `
        <ejs-tooltip id="Tooltip" target='#Toolbar [title]'>
          <ejs-toolbar id='Toolbar'>
            <e-items>
              <e-item text='Cut' tooltipText = 'Cut'></e-item>
              <e-item text='Copy' tooltipText = 'Copy'></e-item>
              <e-item text='Paste' tooltipText = 'Paste'></e-item>
              <e-item text='Undo' tooltipText = 'Undo'></e-item>
              <e-item text='Redo' tooltipText = 'Redo'></e-item>
              </e-items>
          </ejs-toolbar>
        </ejs-tooltip>
        `
})

export class AppComponent {
    @ViewChild('element') element?: any;
}


