/**
 * Loading ajax content sample
 */

import { Component, ViewChild, ViewEncapsulation, Inject } from '@angular/core';
import { TooltipComponent, TooltipModule, TooltipEventArgs } from '@syncfusion/ej2-angular-popups';
import { HttpClient } from '@angular/common/http';
import { Fetch } from '@syncfusion/ej2-base';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-app',
  template: `
        <div id="tool">
        <h4>National Sports</h4>
        <ejs-tooltip #tooltip id="tooltip" class="e-prevent-select" content='Loading...' target="#countryList [title]"
         position='RightCenter' (beforeRender)="onBeforeRender($event)">
            <div id="countryList">
                <ul>
                    <li class="target" title="1"><span>Australia</span></li>
                    <li class="target" title="2"><span>Bhutan</span></li>
                    <li class="target" title="3"><span>China</span></li>
                    <li class="target" title="4"><span>Cuba</span></li>
                    <li class="target" title="5"><span>India</span></li>
                    <li class="target" title="6"><span>Switzerland</span></li>
                    <li class="target" title="7"><span>United States</span></li>
                </ul>
            </div>
        </ejs-tooltip>
        </div>
        `,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [TooltipModule, ListViewModule, HttpClientModule],
})
export class AppComponent {
  //Define an Array of JSON data
  public listViewData: { [key: string]: Object }[] = [
    { id: '1', text: 'Australia' },
    { id: '2', text: 'Bhutan' },
    { id: '3', text: 'China' },
    { id: '4', text: 'Cuba' },
    { id: '5', text: 'India' },
    { id: '6', text: 'Switzerland' },
    { id: '7', text: 'United States' },
  ];

  //Map appropriate columns to fields property
  public fields: Object = { text: 'text', tooltip: 'id' };

  @ViewChild('tooltip')
  public tooltipControl!: TooltipComponent;

  constructor(@Inject(HttpClient) public http: HttpClient) {}

  /**
   * Process tooltip ajax content.
   */

  onBeforeRender(args: TooltipEventArgs) {

    let fetchApi = new Fetch(
      'https://ej2.syncfusion.com/angular/demos/source/tooltip/tooltipdata.json',
      'GET'
    );
    fetchApi.onSuccess = (data: any) => {
      for (var i = 0; i < data.length; i++) {
        if (data[i].Id === args.target.getAttribute('data-content')) {
          /* tslint:disable */
          this.tooltipControl.content =
            "<div class='contentWrap'><span class=" +
            data[i].Class +
            "></span><div class='def'>" +
            data[i].Sports +
            '</div></div>';
          /* tslint:enable */
        }
      }
    };
    fetchApi.send();  
  }
}
