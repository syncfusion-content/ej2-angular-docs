


import { Component, ViewChild } from '@angular/core';
import { SplitterComponent } from '@syncfusion/ej2-angular-layouts';

@Component({
    selector: 'app-root',
    template: `
      <div id='container'>
        <!-- render splitter component -->
        <ejs-splitter #horizontal height='200px' separatorSize=4 width='100%'></ejs-splitter>

        <!-- pane contents -->

        <div id="left-pane-content" style="display: none;">
        <div>Left pane<div id='panetext'>size: 25%</div>
        <div id='panetext'>min: 60px</div>
        </div>
        </div>

        <div id="middle-pane-content" style="display: none;">
        <span>Middle pane<div id="panetext">size: 50%</div>
        <div id="panetext">min: 60px</div>
        </span>
        </div>

        <div id="last-pane-content" style="display: none;">
        <span>Right pane<div id="panetext">size: 25%</div>
        <div id="panetext">min: 60px</div>
        </span>
        </div>
      </div>`
})
export class AppComponent {
    constructor() {
    }
    @ViewChild('horizontal') splitterObj?: SplitterComponent;  
  ngAfterViewInit() {
    this.splitterObj!.paneSettings = [
      { size: '25%', min: '60px', content: '#left-pane-content' },
      { size: '50%', min: '60px', content: '#middle-pane-content' },
      { size: '25%', min: '60px', content: '#last-pane-content' }]
  }
}



