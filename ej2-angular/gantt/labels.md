---
layout: post
title: Task Labels in Angular Gantt Chart Component | Syncfusion
description: Learn how to configure taskbar labels in the Syncfusion Angular Gantt Chart component for enhanced data visualization and project management.
platform: ej2-angular
control: Task labels
documentation: ug
domainurl: ##DomainURL##
---

# Task Labels in Angular Gantt Chart Component

Task labels in the Angular Gantt Chart component display key task information directly on or near taskbars, enhancing project visualization without requiring task interaction. Configured via the [labelSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/labelSettings/) property, labels show details like task names, IDs, or progress, streamlining workflows for resource management and status tracking. Labels support three positions: left labels outside the taskbar for identifiers like **TaskName**, right labels after the taskbar for metrics like **Progress**, and task labels overlaid on taskbars for prominent data like task titles. Left and right labels remain visible regardless of taskbar width, while task labels may clip for short tasks. Labels improve readability and provide immediate context, reducing the need for hovers or dialogs in large projects.

## Configure task labels

Task labels are configured using the [labelSettings](https://ej2.syncfusion.com/angular/documentation/api/gantt/labelSettings/) property, mapping fields from the data source defined in [taskFields](https://ej2.syncfusion.com/angular/documentation/api/gantt#taskfields) (e.g., id to TaskID, name to TaskName). The component supports three label positions with specific use cases:

- [leftLabel](https://ej2.syncfusion.com/angular/documentation/api/gantt/labelSettingsModel#leftlabel): Displays content like task names or resource assignments to the left of taskbars, ideal for identifiers.
- [rightLabel](https://ej2.syncfusion.com/angular/documentation/api/gantt/labelSettingsModel#rightlabel): Shows metrics like progress percentages or durations to the right, suitable for completion data.
- [taskLabel](https://ej2.syncfusion.com/angular/documentation/api/gantt/labelSettingsModel#tasklabel): Overlays content like task titles or progress on taskbars, prominent but limited by taskbar width.

Use template literals for formatted labels, such as **${Progress}%** for progress percentages. Ensure valid `taskFields` mappings to reference fields accurately.

The following example configures labels for task names, IDs, and progress:

```typescript
export class AppComponent {
  public taskSettings: object = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    dependency: "Predecessor",
    child: "subtasks",
  };

  public labelSettings: object = {
    leftLabel: "TaskName",
    rightLabel: "TaskID",
    taskLabel: "${Progress}%",
  };

  public data: object[] = [
    // Task data array.
  ];
}
```

This code displays task names on the left, task IDs on the right, and formatted progress percentages on taskbars, ensuring clear visualization.

## Customize labels with templates

For advanced scenarios, you can create custom label templates that provide complete control over label content and formatting

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/tasklabeltemplate-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/tasklabeltemplate-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/appearance-customization/tasklabeltemplate-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/appearance-customization/tasklabeltemplate-cs1" %}

This code creates a left label with priority-based icons (e.g., red for high priority) and a right label with a progress bar, improving visual feedback. For responsive designs, ensure templates adapt to narrow screens, as task labels may be clipped on short taskbars.

**Conditional label display with icons:**

Create templates that show different content based on task properties:

```typescript
// Left label template with conditional logic.
public leftLabelTemplate: string = `
    <div class="custom-left-label">
        <span *ngIf="data.Priority === 'High'" class="priority-high">🔴</span>
        <span *ngIf="data.Priority === 'Medium'" class="priority-medium">🟡</span>
        <span *ngIf="data.Priority === 'Low'" class="priority-low">🟢</span>
        {{data.TaskName}}
    </div>
`;

// Right label template with progress indicators.
public rightLabelTemplate: string = `
    <div class="custom-right-label">
        <div class="progress-container">
            <span class="progress-text">{{data.Progress}}%</span>
            <div class="progress-bar" [style.width.%]="data.Progress"></div>
        </div>
        <span class="duration-text">{{data.Duration}} days</span>
    </div>
`;
public ngOnInit(): void {
    this.labelSettings = {
            leftLabel: leftLabelTemplate,
            rightLabel: rightLabelTemplate
    }
}
```

**Rich content labels with multiple data points:**

Display complex information with formatted content and calculations:

```typescript
// Task label template with multiple data points.
public taskLabelTemplate: string = `
    <div class="rich-task-label">
        <div class="task-info">
            <strong>{{data.TaskName}}</strong>
            <small>{{data.StartDate | date:'MMM dd'}} - {{data.EndDate | date:'MMM dd'}}</small>
        </div>
        <div class="task-meta">
            <span class="resource-count" *ngIf="data.Resources">
                👥 {{data.Resources.length}}
            </span>
            <span class="progress-badge"
                  [class]="'progress-' + getProgressClass(data.Progress)">
                {{data.Progress}}%
            </span>
        </div>
    </div>
`;
public ngOnInit(): void {
    this.labelSettings = {
            taskLabel: taskLabelTemplate
    }
}


// Component method for progress classification.
getProgressClass(progress: number): string {
    if (progress >= 80) return 'high';
    if (progress >= 40) return 'medium';
    return 'low';
}
```

## See also

- [How to customize taskbars?](https://ej2.syncfusion.com/angular/documentation/gantt/taskbar)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/task-dependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)
