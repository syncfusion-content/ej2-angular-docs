


import { Component, ViewChild } from '@angular/core';
import { SplitterComponent} from '@syncfusion/ej2-angular-layouts';

@Component({
    selector: 'app-root',
    template: `
      <div id='container'>
         <ejs-splitter #splitterInstance height='200px' width='600px'>
            <e-panes>
                <e-pane size='200px' [collapsible]='true' content='<div class="content" >Left pane</div>'>
                </e-pane>
                <e-pane size='200px' [collapsible]='true' content='<div class="content">Middle pane</div>'>
                </e-pane>
                <e-pane size='200px' [collapsible]='true' content='<div class="content">Right pane</div>'>
                </e-pane>
            </e-panes>
          </ejs-splitter>
          <button ejs-button id='expand' (click)="expandClick()">Expand</button>
          <button ejs-button id='collapse' (click)="collapseClick()">Collapse</button>
      </div>`
})
export class AppComponent {
    constructor() {
    }

    @ViewChild('splitterInstance') splitterObj?: SplitterComponent;

    public expandClick: any = () => {
       this.splitterObj?.collapse(0);
    }

    public collapseClick: any = () => {
       this.splitterObj?.expand(0);
    }
}



