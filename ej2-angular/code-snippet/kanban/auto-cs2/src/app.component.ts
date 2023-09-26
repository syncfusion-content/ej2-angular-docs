

import { Component } from '@angular/core';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { DialogUtility } from '@syncfusion/ej2-popups';
import { closest } from '@syncfusion/ej2-base';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings'  (dataBound)='OnDataBound()'>
                <e-columns>
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Testing' keyField='Testing'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
            </ejs-kanban>`
})
export class AppComponent {
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    OnDataBound(): void {
        let headerEle: HTMLElement = document.querySelector('.e-header-row') as HTMLElement;
        headerEle.addEventListener("dblclick", function (e: Event) {
            let target = closest((<HTMLElement>e.target), '.e-header-cells');
            DialogUtility.alert({
                title: 'Header',
                content: "Double clicked on " + (<HTMLElement>target.querySelector('.e-header-text')).innerText + " header",
                showCloseIcon: true,
                closeOnEscape: true,
                animationSettings: { effect: 'Zoom' }
            });
        });
    }
}



