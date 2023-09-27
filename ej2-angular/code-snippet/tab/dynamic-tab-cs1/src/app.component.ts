


import { Tooltip } from '@syncfusion/ej2-popups';
import { Component, ViewChild } from '@angular/core';
import { enableRipple, createElement } from '@syncfusion/ej2-base';
import { SelectEventArgs, TabComponent } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

/**
 * Add new tabs dynamically
 */

@Component({
    selector: 'app-container',
    template: `<ejs-tab #element id="element" (created)="tabCreated()" (selected)="tabSelected($event)">
            <e-tabitems>
                <e-tabitem [header]='headerText[0]' content="#tab1_content"></e-tabitem>
                <e-tabitem [header]='headerText[1]' content="#form-container"></e-tabitem>
            </e-tabitems>
        </ejs-tab>`
})

export class AppComponent {
      @ViewChild('element') tabInstance?: TabComponent;

    public totalItems?: number;
    public headerText: Object = [{ 'text': 'Tab1' }, { 'iconCss': 'e-add-icon' }];

    public tabCreated(): void {
        let tooltip: Tooltip = new Tooltip({
            content: 'Add Tab'
        });
        tooltip.appendTo('.e-ileft.e-icon');

        (document.getElementById('btn-add') as HTMLElement).onclick = (e : Event) => {
            let title: string = (document.getElementById('tab-title') as any).value;
            let content: string = (document.getElementById('tab-content') as any).value;
            let item: Object =  { header: { text: title }, content: createElement('pre', { innerHTML: content.replace(/\n/g, '<br>\n') }).outerHTML };

            this.totalItems = document.querySelectorAll('#element .e-toolbar-item').length;
            this.tabInstance?.addTab([item], this.totalItems-1);
        };
    }

    public tabSelected(args: SelectEventArgs): void {
        if (args.selectedIndex === document.querySelectorAll('#element .e-toolbar-item').length -1) {
            (document.getElementById('tab-title') as any).value = '';
            (document.getElementById('tab-content') as any).value = '';
        }
    }
}



