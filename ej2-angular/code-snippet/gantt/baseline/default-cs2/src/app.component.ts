import { Component } from '@angular/core';
import { Gantt, Selection, DayMarkers, TaskFieldsModel, SplitterSettingsModel, SelectionService, GanttModule } from '@syncfusion/ej2-angular-gantt';
import { baselineData } from './data';

Gantt.Inject(Selection, DayMarkers);

@Component({
  imports: [GanttModule],
  providers: [SelectionService],
  standalone: true,
  selector: 'app-root',
  template: `
    <ejs-gantt
      [dataSource]="data"
      [taskFields]="taskSettings"
      [splitterSettings]="splitterSettings"
      [tooltipSettings]="tooltipSettings"
      [allowSelection]="true"
      [renderBaseline]="true"
      [rowHeight]="60"
      [taskbarHeight]="20"
      gridLines="Both"
      [highlightWeekends]="true"
      [labelSettings]="labelSettings"
      [baselineColor]="'red'"
      height="450px"
      [baselineTemplate]="baselineTemplate"
    >
      <e-columns>
        <e-column field="TaskID" headerText="ID" textAlign="Left"></e-column>
        <e-column field="TaskName" width="270" headerText="Name"></e-column>
        <e-column field="BaselineStartDate" headerText="Baseline Start Date" width="180"></e-column>
        <e-column field="BaselineDuration" headerText="Baseline Duration" width="180"></e-column>
        <e-column field="BaselineStartDate1" type="date" format="yMd" headerText="Baseline1 Start Date" width="180"></e-column>
        <e-column field="BaselineDuration1" headerText="Baseline1 Duration" width="180"></e-column>
        <e-column field="BaselineStartDate2" type="date" format="yMd" headerText="Baseline2 Start Date" width="180"></e-column>
        <e-column field="BaselineDuration2" headerText="Baseline2 Duration" width="180"></e-column>
      </e-columns>
    </ejs-gantt>
  `
})
export class AppComponent {
  public data: Object[] = baselineData;

  public taskSettings: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    baselineStartDate: 'BaselineStartDate',
    baselineEndDate: 'BaselineEndDate',
    parentID: 'ParentID'
  };

  public splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
  };

  public tooltipSettings: Object = {
    showTooltip: false
  };

  public labelSettings: Object = {
    taskLabel: 'TaskName'
  };

  public baselineTemplate = (props: any): string => {
    if (props.hasChildRecords || (props.data && props.data.hasChildRecords)) {
      return '';
    }

    const gantt = (document.querySelector('ejs-gantt') as any).ej2_instances[0];
    const taskRecord = props.taskData;
    const ganttProperties = taskRecord.ganttProperties;
    const chartRowsModule = gantt.chartRowsModule;

    const baselineTop = chartRowsModule.baselineTop;
    const baselineHeight = chartRowsModule.baselineHeight;
    const taskBarHeight = chartRowsModule.taskBarHeight;
    const milestoneHeight = chartRowsModule.milestoneHeight;
    const milestoneMarginTop = chartRowsModule.milestoneMarginTop;

    const rowHeight = gantt.rowHeight;
    const renderBaseline = gantt.renderBaseline;
    const enableRtl = gantt.enableRtl;

    const taskSpacing = 9;
    const baselineSpacing = 4;

    function getLeft(date: any): number {
      return gantt.dataOperation.getTaskLeft(new Date(date), false, ganttProperties.calendarContext);
    }

    function getWidth(start: any, duration: number): number {
      if (!start || duration == null || duration === 0) return 0;
      const end = new Date(start);
      end.setDate(end.getDate() + duration);
      const leftStart = getLeft(start);
      const leftEnd = getLeft(end);
      return leftEnd - leftStart;
    }

    function render(start: any, duration: number, index: number): string {
      if (!start) return '';

      const leftPosition = getLeft(start);
      const width = getWidth(start, duration);

      if (duration === 0) {
        const milestoneSize = renderBaseline ? taskBarHeight : (taskBarHeight - 10);
        const baselineMilestoneHeight = renderBaseline ? 5 : 2;

        const leftPosition_ms = enableRtl
          ? (leftPosition - (milestoneHeight / 2) + 3)
          : (leftPosition - (milestoneHeight / 2) + 1);

        const marginTop =
          (-Math.floor(rowHeight - milestoneMarginTop) + baselineMilestoneHeight) +
          2 +
          (index * baselineSpacing);

        return '<div style="position:absolute;width:' + milestoneSize + 'px;height:' + milestoneSize + 'px;transform:rotate(45deg);' +
          (enableRtl ? 'right:' : 'left:') + leftPosition_ms + 'px;margin-top:' + marginTop + 'px;"></div>';
      }

      return '<div style="position:absolute;' +
        (enableRtl ? 'right:' : 'left:') + leftPosition + 'px;margin-top:' + (baselineTop + (index * taskSpacing)) +
        'px;width:' + width + 'px;height:' + baselineHeight + 'px;"></div>';
    }

    return '<div>' +
      render(taskRecord.taskData.BaselineStartDate, taskRecord.taskData.BaselineDuration, 0) +
      render(taskRecord.taskData.BaselineStartDate1, taskRecord.taskData.BaselineDuration1, 1) +
      render(taskRecord.taskData.BaselineStartDate2, taskRecord.taskData.BaselineDuration2, 2) +
      '</div>';
  };
}