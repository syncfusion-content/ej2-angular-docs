

import { Component } from '@angular/core';
import { CardSettingsModel, SwimlaneSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings' enableTooltip='true'>
                <e-columns>
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Testing' keyField='Testing'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
                <ng-template #tooltipTemplate let-data>
                    <div class='e-kanbanTooltipTemp'>
                        <table>
                            <tr>
                                <td class="details">
                                    <table>
                                        <colgroup>
                                            <col style="width:30%">
                                            <col style="width:70%">
                                        </colgroup>
                                        <tbody>
                                            <tr>
                                                <td class="CardHeader">Assignee:</td>
                                                <td>{{data.Assignee}}</td>
                                            </tr>
                                            <tr>
                                                <td class="CardHeader">Type:</td>
                                                <td>{{data.Type}}</td>
                                            </tr>
                                            <tr>
                                                <td class="CardHeader">Estimate:</td>
                                                <td>{{data.Estimate}}</td>
                                            </tr>
                                            <tr>
                                                <td class="CardHeader">Summary:</td>
                                                <td>{{data.Summary}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>
                </ng-template>
            </ejs-kanban>`
})
export class AppComponent {
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
}



