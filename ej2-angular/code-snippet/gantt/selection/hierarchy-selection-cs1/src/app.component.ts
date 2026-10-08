import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { GanttComponent, GanttModule, SelectionService, FilterService, ToolbarService } from '@syncfusion/ej2-angular-gantt';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ChangeEventArgs } from '@syncfusion/ej2-dropdowns';
import { data } from './data';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [GanttModule, DropDownListModule],
    providers: [SelectionService, FilterService, ToolbarService],
    encapsulation: ViewEncapsulation.None,
    template: `
    <div style="display: flex; align-items: center; gap: 12px; padding-bottom: 10px;">
      <label for="mode">Hierarchy Checkbox Mode:</label>
      <ejs-dropdownlist
        id="mode"
        width="150px"
        [dataSource]="modes"
        [fields]="modeFields"
        value="hierarchy"
        (change)="changeMode($event)">
      </ejs-dropdownlist>
    </div>
    <ejs-gantt
      #gantt
      height="370px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [selectionSettings]="selectionSettings"
      [toolbar]="toolbar"
      [filterSettings]="filterSettings"
      [allowFiltering]="true"
      [allowSelection]="true"
      hierarchyCheckboxMode="Hierarchy">
      <e-columns>
        <e-column field="CheckBox" headerText="" [showCheckbox]="true" width="70" [allowFiltering]="false"></e-column>
        <e-column field="TaskID" width="110" [visible]="false"></e-column>
        <e-column field="TaskName" width="190"></e-column>
        <e-column field="StartDate"></e-column>
        <e-column field="EndDate"></e-column>
        <e-column field="Duration"></e-column>
        <e-column field="Predecessor"></e-column>
        <e-column field="Progress"></e-column>
      </e-columns>
    </ejs-gantt>`
})
export class AppComponent {
    @ViewChild('gantt', { static: true }) public ganttInstance!: GanttComponent;
    public data: object[] = data;
    public taskSettings: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID'
    };
    public selectionSettings: object = {
        mode: 'Cell',
        type: 'Multiple'
    };
    public filterSettings: object = {
        type: 'Menu'
    };
    public toolbar: string[] = ['Search'];
    public modes: object[] = [
        { id: 'self', type: 'self' },
        { id: 'hierarchy', type: 'hierarchy' },
        { id: 'filteredHierarchy', type: 'filteredHierarchy' }
    ];
    public modeFields: object = {
        text: 'type',
        value: 'id'
    };

    public changeMode(args: ChangeEventArgs): void {
        this.ganttInstance.hierarchyCheckboxMode = args.value as any;
        this.ganttInstance.refresh();
    }
}