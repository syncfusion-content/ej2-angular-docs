

import { Component } from '@angular/core';
import { CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings'>
                <e-columns>
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
                <ng-template #cardSettingsTemplate let-data>
                    <div class='e-card-content'>
                        <table class="card-template-wrap">
                            <tbody>
                                <tr>
                                    <td class="CardHeader">Id:</td>
                                    <td>{{data.Id}}</td>
                                </tr>
                                <tr>
                                    <td class="CardHeader">Type:</td>
                                    <td>{{data.Type}}</td>
                                </tr>
                                <tr>
                                    <td class="CardHeader">Priority:</td>
                                    <td>{{data.Priority}}</td>
                                </tr>
                                <tr>
                                    <td class="CardHeader">Summary:</td>
                                    <td>{{data.Summary}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ng-template>
            </ejs-kanban>`
})
export class AppComponent {
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        headerField: 'Id'
    };
}



