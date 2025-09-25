---
layout: post
title: Deleting tasks in Angular Gantt component | Syncfusion
description: Learn how to delete tasks dynamically in the Syncfusion Angular Gantt component using toolbar or programmatic methods for efficient project management.
platform: ej2-angular
control: Deleting tasks
documentation: ug
domainurl: ##DomainURL##
---

# Deleting tasks in Angular Gantt component

Deleting tasks in the Angular Gantt component streamlines project management by removing tasks, such as outdated milestones or subtasks, using the toolbar or programmatic methods. Enabled by setting the [`editSettings.allowDeleting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowdeleting) property to `true` and injecting `EditService`, tasks can be deleted after selecting a row, ensuring seamless updates to dependencies and critical path calculations. A confirmation dialog, activated via [`editSettings.showDeleteConfirmDialog`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#showdeleteconfirmdialog), prompts to verify deletions, preventing accidental removals. The [`deleteRow`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#deleterow) method allows programmatic deletion, requiring a selected row with valid `taskFields` mappings (e.g., `id`, `name`). Ensure tasks are selected and `taskFields` are properly configured to avoid issues during deletion.

## Delete tasks via toolbar

Enable task deletion through the toolbar by setting [`editSettings.allowDeleting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowdeleting) to `true` and injecting `EditService`. Select a row and click the toolbar’s `Delete` icon to remove the task, with an optional confirmation dialog if [`editSettings.showDeleteConfirmDialog`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#showdeleteconfirmdialog) is enabled. This method is ideal for quickly removing tasks like completed activities.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/taskdelete-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/taskdelete-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/taskdelete-cs1" %}

## Delete tasks with confirmation dialog

Enable a confirmation dialog for task deletion by setting [`editSettings.showDeleteConfirmDialog`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#showdeleteconfirmdialog) to `true`, alongside [`editSettings.allowDeleting`](https://ej2.syncfusion.com/angular/documentation/api/gantt/editSettings/#allowdeleting) and `EditService`. After selecting a row, deleting via the toolbar or [`deleteRow`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#deleterow) method prompts a dialog to confirm the action, ensuring intentional removals. This is useful for critical tasks where accidental deletion must be avoided.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/managing-tasks/delete-confirmation-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/managing-tasks/delete-confirmation-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/managing-tasks/delete-confirmation-cs1" %}

## Delete tasks programmatically

Delete tasks programmatically using the [`deleteRow`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#deleterow) method, which requires a selected row and `EditService`. Ensure the row is selected and `taskFields` mappings (e.g., `id`) are valid to perform the deletion. This method supports automation, such as removing tasks via a custom button, and respects the confirmation dialog if enabled.

```typescript
import { Component, ViewChild } from '@angular/core';
import { GanttModule, GanttComponent, EditService, SelectionService } from '@syncfusion/ej2-angular-gantt';

@Component({
    imports: [GanttModule],
    providers: [EditService, SelectionService],
    standalone: true,
    selector: 'app-root',
    template: `
        <button ejs-button (click)="deleteTask()">Delete Task</button>
        <ejs-gantt 
            #ganttObj
            id="ganttDefault" 
            height="430px" 
            [dataSource]="taskData" 
            [taskFields]="taskSettings" 
            [editSettings]="editSettings">
        </ejs-gantt>
    `
})
export class AppComponent {
    @ViewChild('ganttObj', { static: true })
    public ganttObj: GanttComponent;
    public taskData: object[] = [
        { TaskID: 1, TaskName: "Product concept", StartDate: new Date("04/02/2025"), EndDate: new Date("04/08/2025") },
        { TaskID: 2, TaskName: "Define the product usage", StartDate: new Date("04/02/2025"), EndDate: new Date("04/08/2025"), Duration: 1, Progress: 30, ParentId: 1 },
        { TaskID: 3, TaskName: "Define the target audience", StartDate: new Date("04/02/2025"), EndDate: new Date("04/04/2025"), Duration: 2, Progress: 40, ParentId: 1 },
        { TaskID: 4, TaskName: "Prepare product sketch and notes", StartDate: new Date("04/05/2025"), Duration: 2, Progress: 30, ParentId: 1, Predecessor: "2" },
        { TaskID: 5, TaskName: "Concept approval", StartDate: new Date("04/08/2025"), EndDate: new Date("04/08/2025"), Duration: 0, ParentId: 1, Predecessor: "3,4" },
        { TaskID: 6, TaskName: "Market research", StartDate: new Date("04/09/2025"), EndDate: new Date("04/18/2025"), Progress: 30 },
        { TaskID: 7, TaskName: "Demand analysis", Progress: 40, ParentId: 6 },
        { TaskID: 8, TaskName: "Customer strength", StartDate: new Date("04/09/2025"), EndDate: new Date("04/12/2025"), Duration: 4, Progress: 30, ParentId: 7, Predecessor: "5" },
        { TaskID: 9, TaskName: "Market opportunity analysis", StartDate: new Date("04/09/2025"), EndDate: new Date("04/12/2025"), Duration: 4, ParentId: 7, Predecessor: "5" },
        { TaskID: 10, TaskName: "Competitor analysis", StartDate: new Date("04/15/2025"), EndDate: new Date("04/18/2025"), Duration: 4, Progress: 30, ParentId: 6, Predecessor: "7,8" },
    ];
    public taskSettings: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        dependency: 'Predecessor',
        progress: 'Progress',
        parentID: 'ParentId'
    };
    public editSettings: object = {
        allowDeleting: true
    };
    public deleteTask(): void {
        this.ganttObj.deleteRecord(this.ganttObj.selectedRowIndex + 1);
    }
}
```

## See also
- [How to configure task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/task-bar-editing)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)