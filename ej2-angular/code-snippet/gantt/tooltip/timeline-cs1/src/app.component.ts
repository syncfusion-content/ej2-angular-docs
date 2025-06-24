import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { GanttModule } from '@syncfusion/ej2-angular-gantt'
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Gantt } from '@syncfusion/ej2-gantt';
import { editingData } from './data';
import { CommonModule } from '@angular/common'; 

@Component({
  imports: [GanttModule, CommonModule],
  standalone: true,
  selector: "app-root",
  template: `
    <ejs-gantt
      id="ganttDefault"
      height="430px"
      [dataSource]="data"
      [taskFields]="taskSettings"
      [columns]="columns"
      [tooltipSettings]="tooltipSettings"
    >
      <ng-template #tooltipSettingsTimeline let-data>
        <ng-container *ngIf="data.tier === 'topTier'; else bottomTierTemplate">
          <div *ngIf="executeTopTierTooltip(data.value, data.date, data.tier)">
            <div
              [style.border-bottom]="'2px solid white'"
              [style.padding-bottom]="'5px'"
              [style.text-align]="'center'"
            >
              <span style="font-weight: bold; font-size: 14px;">{{
                data.date
              }}</span>
            </div>
            <div style="display: flex; padding-bottom: 5px; padding-top: 5px;">
              <span style="font-weight: bold;">Active Tasks:</span>
              <span style="padding-left: 2px;">{{
                topTierData.activeTasks
              }}</span>
            </div>
            <div style="display: flex; padding-bottom: 5px;">
              <span style="font-weight: bold;">Milestones:</span>
              <span style="padding-left: 2px;">{{
                topTierData.milestones
              }}</span>
            </div>
            <div style="display: flex; padding-bottom: 5px;">
              <span style="font-weight: bold;">Overall Progress:</span>
              <span style="padding-left: 2px;">{{
                topTierData.overallProgress
              }}</span>
            </div>
          </div>
        </ng-container>
        <ng-template #bottomTierTemplate>
          <div *ngIf="executeBottomTierTooltip(data.date, data.tier)">
            <div
              [style.border-bottom]="'2px solid white'"
              [style.padding-bottom]="'5px'"
              [style.text-align]="'center'"
            >
              <span style="font-weight: bold; font-size: 14px;">{{
                data.date
              }}</span>
            </div>
            <div style="display: flex; padding-bottom: 5px; padding-top: 5px;">
              <span style="font-weight: bold;">Active Tasks:</span>
              <span style="padding-left: 2px;">{{
                bottomTierData.activeTasks
              }}</span>
            </div>
            <div style="display: flex; padding-bottom: 5px;">
              <span style="font-weight: bold;">Milestones:</span>
              <span style="padding-left: 2px;">{{
                bottomTierData.milestones
              }}</span>
            </div>
            <div style="display: flex; padding-bottom: 5px;">
              <span style="font-weight: bold;">Overall Progress:</span>
              <span style="padding-left: 2px;">{{
                bottomTierData.overallProgress
              }}</span>
            </div>
          </div>
        </ng-template>
      </ng-template>
    </ejs-gantt>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  public data?: object[];
  public taskSettings?: object;
  public tooltipSettings?: object;
  columns: any;
  topTierData: any;
  bottomTierData: any;

  public ngOnInit(): void {
    this.data = editingData;
    this.taskSettings = {
      id: "TaskID",
      name: "TaskName",
      startDate: "StartDate",
      endDate: 'EndDate',
      duration: "Duration",
      progress: "Progress",
      dependency: "Predecessor",
      child: "subtasks",
    };
    this.tooltipSettings = {
      showTooltip: true,
    };
  }


  private getTooltipData(startDate: Date, endDate: Date, tier: string) {
    let ganttElement = document.getElementsByClassName('e-gantt')[0] as any;
    let gantt = ganttElement ? ganttElement.ej2_instances[0] : null;
    if (!gantt) return { activeTasks: 0, milestones: 0, overallProgress: 0 };

    let activeTasks = gantt.currentViewData.filter((task: any) => {
      let taskStart = new Date(task.StartDate);
      let taskEnd = new Date(task.EndDate);
      taskStart.setHours(0, 0, 0, 0);
      taskEnd.setHours(0, 0, 0, 0);
      return tier === 'topTier'
        ? taskStart >= startDate && taskEnd <= endDate
        : taskStart.getTime() === startDate.getTime() && taskEnd.getTime() === endDate.getTime();
    });

    let milestones = activeTasks.filter((task : any) => task.Duration === 0);
    let totalProgress = activeTasks.reduce((acc: number, task: any) => acc + (task.Progress || 0), 0);
    let overallProgress = activeTasks.length > 0 ? (totalProgress / activeTasks.length).toFixed(2) : "0";

    return {
      activeTasks: activeTasks.length,
      milestones: milestones.length,
      overallProgress: overallProgress,
    };
  }

  public topTierTooltip(value: string, date: Date, tier: string): void {
    let ganttElement = document.getElementsByClassName("e-gantt")[0] as any;
    let gantt = ganttElement ? ganttElement.ej2_instances[0] : null;
    if (!gantt) return;

    let endDate = new Date(date);
    if (gantt.timelineSettings.topTier.unit) {
      endDate.setDate(endDate.getDate() + 6);
    }
    this.topTierData = this.getTooltipData(new Date(date), endDate, tier);
  }

  public bottomTierTooltip(date: string, tier: string): void {
    let ganttElement = document.getElementsByClassName("e-gantt")[0] as any;
    let gantt = ganttElement ? ganttElement.ej2_instances[0] : null;
    if (!gantt) return;

    let endDate = new Date(date);
    if (gantt.timelineSettings.bottomTier.unit) {
      endDate = new Date(date);
    }
    this.bottomTierData = this.getTooltipData(new Date(date), endDate, tier);
  }

  public executeTopTierTooltip(value: string, date: Date, tier: string): boolean {
    this.topTierTooltip(value, date, tier);
    return true;
  }

  public executeBottomTierTooltip(date: string, tier: string): boolean {
    this.bottomTierTooltip(date, tier);
    return true;
  }
}