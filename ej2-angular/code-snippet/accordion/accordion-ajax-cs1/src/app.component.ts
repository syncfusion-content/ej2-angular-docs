

import { Component, ViewChild } from '@angular/core';
import { Ajax } from '@syncfusion/ej2-base';
import { AccordionComponent} from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'app-container',
    template: `
    <div id="acrdnContnet1" style="display:none">
        <ul style="margin : 0px;padding:0px 16px; list-style-type: none">
          <li>Testing</li>
          <li>Development</li>
        </ul>
    </div>
    <div id="acrdnContnet2" style="display:none">
      <ul style="margin : 0px;padding:0px 16px; list-style-type: none">
        <li>Mobile</li>
        <li>Web</li>
      </ul>
    </div>
    <ejs-accordion #acrdnInstance>
      <e-accordionitems>
        <e-accordionitem header='Department' content = '#acrdnContnet1'></e-accordionitem>
        <e-accordionitem header='Platform' content = '#acrdnContnet2'></e-accordionitem>
        <e-accordionitem header='Employee Details'></e-accordionitem>
      </e-accordionitems>
    </ejs-accordion>
        `
})

export class AppComponent {
    @ViewChild('acrdnInstance') acrdnInstance?: AccordionComponent;
    public contentData?: string;

    ngOnInit() {
    let ajax: Ajax = new Ajax('./ajax.html', 'GET', true);
    ajax.send().then();
    ajax.onSuccess = (data: string): void => {
       (this.acrdnInstance as AccordionComponent).items[2].content = data;
       (this.acrdnInstance as AccordionComponent).refresh();
    };
    }
}


