

import { Component } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { NumericTextBox, TextBox } from '@syncfusion/ej2-inputs';
import { CardSettingsModel, DialogSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './datasource';

@Component({
  selector: 'app-root',
  template: `<ejs-kanban keyField='Status' [dataSource]='data' [cardSettings]='cardSettings'>
                <e-columns>
                  <e-column headerText='To do' keyField='Open'></e-column>
                  <e-column headerText='In Progress' keyField='InProgress'></e-column>
                  <e-column headerText='Testing' keyField='Testing'></e-column>
                  <e-column headerText='Done' keyField='Close'></e-column>
                </e-columns>
                 <ng-template #dialogSettingsTemplate let-data>
                    <table>
                        <tbody>
                            <tr>
                                <td class="e-label">ID</td>
                                <td>
                                  <div class="e-float-input e-control-wrapper">
                                    <input id="Id" name="Id" type="text" class="e-field" value='{{data.Id}}' disabled />
                                  </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="e-label">Status</td>
                                <td>
                                    <ejs-dropdownlist id='Status' #dropdownStatus name="Status"
                                        class="e-field" [dataSource]='statusData' value='{{data.Status}}'
                                        placeholder='Status'>
                                    </ejs-dropdownlist>
                                </td>
                            </tr>
                            <tr>
                                <td class="e-label">Assignee</td>
                                <td>
                                    <ejs-dropdownlist id='Assignee' #dropdownAssignee name="Assignee"
                                        class="e-field" [dataSource]='assigneeData'
                                        value='{{data.Assignee}}' placeholder='Assignee'></ejs-dropdownlist>
                                </td>
                            </tr>
                            <tr>
                                <td class="e-label">Priority</td>
                                <td>
                                    <ejs-dropdownlist type="text" name="Priority" id="Priority"
                                        class="e-field" placeholder='Priority' [dataSource]='priorityData'
                                        value='{{data.Priority}}'></ejs-dropdownlist>
                                </td>
                            </tr>
                            <tr>
                                <td class="e-label">Summary</td>
                                <td>
                                   <div class="e-float-input e-control-wrapper">
                                        <textarea type="text" name="Summary" id="Summary" class="e-field"
                                        value='{{data.Summary}}'></textarea>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </ng-template>
            </ejs-kanban>`
})
export class AppComponent {
    public data: Object[] = kanbanData;
    public cardSettings: CardSettingsModel = {
        contentField: 'Summary',
        headerField: 'Id'
    };
    statusData: any;
    assigneeData: any;
    priorityData: any;
}



