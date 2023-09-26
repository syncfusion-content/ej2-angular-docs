


import { Component, ViewChild } from '@angular/core';
import { Ajax } from '@syncfusion/ej2-base';
import { TooltipComponent, TooltipEventArgs, TooltipModule } from '@syncfusion/ej2-angular-popups';
@Component({
    selector: 'my-app',
    template: `
    <div id="tool">
     <h2> Dynamic Tooltip content </h2>
      <ejs-tooltip #tooltip id='tooltip' content='Loading...' target=".circletool" [showTipPointer]='false' (beforeRender)="onBeforeRender($event)">
              <div id="box">
                <div id='1' class="circletool bold-01"></div>
                <div id='2' class="circletool italic"></div>
                <div id='3' class="circletool underline-02"></div>
                <div id='4' class="circletool cut-02"></div>
                <div id='5' class="circletool copy"></div>
                <div id='6' class="circletool paste"></div>
              </div>
      </ejs-tooltip>
    </div>
    `,
})

export class AppComponent  {
   @ViewChild('tooltip')
    public tooltipControl: TooltipComponent | any;
  constructor(){}
  onBeforeRender(args: TooltipEventArgs): void {
    this.tooltipControl.content = 'Loading...';
    this.tooltipControl.dataBind();
    let ajax: Ajax = new Ajax('./tooltipdata.json', 'GET', true);
    ajax.send().then(
        (result: any) => {
            result = JSON.parse(result);
            for (let i: number = 0; i < result.length; i++) {
                if (result[i].Id == args.target.id) {
                    /* tslint:disable */
                    this.tooltipControl.content = result[i].Name;
                    /* tslint:enable */
                }
            }
            this.tooltipControl.dataBind();
        },
        (reason: any) => {
            this.tooltipControl.content = reason.message;
            this.tooltipControl.dataBind();
        });
}
}



