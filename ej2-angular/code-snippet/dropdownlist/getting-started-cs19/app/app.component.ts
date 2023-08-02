

import { Component } from '@angular/core';
import { Tooltip, TooltipEventArgs } from '@syncfusion/ej2-popups';

@Component({
    selector: 'app-root',
    // specifies the template string for the DropDownList component with change event
    template: `<ejs-dropdownlist id='ddltooltip' #samples [dataSource]='data' [fields]='fields' [placeholder]='text' (close)='onClose($event)'></ejs-dropdownlist>`
})
export class AppComponent {
    constructor() {
    }
    public tooltip ?: Tooltip| any;
    ngAfterViewInit(){
      //Initialize Tooltip component
      this.tooltip = new Tooltip({
          // default content of tooltip
          content: 'Loading...',
          // set target element to tooltip
          target: '.e-list-item',
          // set position of tooltip
          position: 'TopCenter',
          // bind beforeRender event
          beforeRender: this.onBeforeRender
      });
      this.tooltip.appendTo('body');
    }
    // defined the array of data
    public data: { [key: string]: Object }[] = [
        { id: '1', text: 'Australia', content: 'National sports is Cricket' },
        { id: '2', text: 'Bhutan', content: 'National sports is Archery' },
        { id: '3', text: 'China', content: 'National sports is Table Tennis' },
        { id: '4', text: 'Cuba', content: 'National sports is Baseball' },
        { id: '5', text: 'India', content: 'National sports is Hockey' },
        { id: '6', text: 'Spain', content: 'National sports is Football' },
        { id: '7', text: 'United States', content: 'National sports is Baseball' }];
    // maps the appropriate column to fields property
    public fields: Object = { text: 'text', tooltip: 'Id' };
    //set the placeholder to DropDownList input
    public text: string = "Select a country";
    // close event
    onClose(e : any) {
      this.tooltip.close();
    }
    //beforeRender event of tooltip
   onBeforeRender(args: TooltipEventArgs): void {
        // get the target element
        let listElement = document.getElementById('ddltooltip');
        let result: Object[] = (listElement! as any).ej2_instances[0].dataSource;
        let i: number;
        for ( i = 0; i < result.length; i++) {
            if ((result[i] as any).text === args.target.textContent) {
                (this as any).content = (result[i] as any).content;
                (this as any).dataBind();
                break;
            }
        }
    }
}


