

import { Component, ViewChild, Inject } from '@angular/core';
import { TooltipComponent, TooltipEventArgs } from '@syncfusion/ej2-angular-popups';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    styles: [`
        #countryList {
          padding: 5px;
        }

        #countryList ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          width: 100px;
          border: 1px solid #c4c4c4;
        }

        #countryList li {
          padding: 10px;
        }

        #countryList li:hover {
          background-color: #ececec;
        }

        .contentWrap {
          padding: 3px 0;
          line-height: 16px;
        }

        .def {
          float: right;
        }
        #tool {
          width: 350px;
          position: relative;
          left: 50%;
          transform: translateX(-25%);
        }
        `]
})

export class AppComponent {
    @ViewChild('tooltip')
    public tooltipControl: TooltipComponent | any ;
    constructor( @Inject(HttpClientModule) public http: HttpClient) { }

    onBeforeRender(args: TooltipEventArgs) {
        (this as any).http.get('tooltipdata.json')
            .map((res: { json: () => any; }) => res.json())
            .subscribe(
            (result: any) => {
                for (let i: number = 0; i < result.length; i++) {
                    if (result[i].Id === args.target.getAttribute('data-content')) {
                        this.tooltipControl!.content = "<div class='contentWrap'><div class='def'>" + result[i].Sports + "</div></div>";
                    }
                }
                this.tooltipControl!.dataBind();
            },
            (err: Response) => {
                this.tooltipControl!.content = err.statusText;
                this.tooltipControl!.dataBind();
            });
    }
}



