---
layout: post
title: Configure work in Angular Gantt component | Syncfusion
description: Learn how to configure work and task types in the Syncfusion Angular Gantt component for accurate task scheduling and resource allocation.
platform: ej2-angular
control: Work
documentation: ug
domainurl: ##DomainURL##
---

# Configure work in Angular Gantt component

The work feature in the Angular Gantt component defines the total effort required to complete a task, mapped via the [taskFields.work](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#work) property to a numeric value (e.g., 40 for 40 hours). The effort is measured in hours, days, or minutes using the [workUnit](https://ej2.syncfusion.com/angular/documentation/api/gantt/#workUnit) property, with **Hour** as the default. For example, a task with 40 hours of work and one resource at 100% allocation spans 5 8-hour workdays. Mapping `taskFields.work` sets the task type to **FixedWork** by default, ensuring work hours remain constant during edits. This feature, requiring `EditService` for modifications, integrates with resources, dependencies, and critical path calculations, ensuring precise project scheduling for resource-driven projects.

## Configure work

Use the [taskFields.work](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#work) property to map a numeric work value (e.g., hours) from the data source. Set the measurement unit with [workUnit](https://ej2.syncfusion.com/angular/documentation/api/gantt/#workUnit) to **Hour**, **Day**, or **Minute** to define how work is calculated. For example, `workUnit: "Day"` assumes 8-hour workdays. Inject `EditService` to enable editing work via dialogs or taskbar drags. Work values determine taskbar lengths and influence dependency scheduling, aligning project timelines with resource availability.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/work/work-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/work/work-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/work/work-cs1" %}

## Configure task types

The [taskType](https://ej2.syncfusion.com/angular/documentation/api/gantt/#taskType) property controls how `work`, `duration`, and `resourceUnit` fields interact during edits, with `FixedUnit` as the default unless `taskFields.work` is mapped (sets **FixedWork**). Inject `EditService` to enable editing. The available task types are:
- **FixedDuration**: Duration remains constant; editing work or resource units adjusts the other (e.g., increasing work increases resource allocation).
- **FixedWork**: Work remains constant; editing duration or resource units adjusts the other (e.g., reducing duration increases resource allocation).
- **FixedUnit**: Resource units remain constant; editing work or duration adjusts the other (e.g., increasing work extends duration).

For example, a **FixedWork** task with 40 hours and two resources at 50% each spans 5 days; shortening duration to 4 days increases resource units to 62.5%. Task types affect taskbar rendering and critical path calculations, ensuring accurate scheduling.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/work/tasktype-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/work/tasktype-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/work/tasktype-cs1" %}

Following table explains how the work, duration and resource unit fields will gets updated on changing any of the fields

Task Type | Changes in Duration | Changes in work | Changes in Resource Units
-----|-----|-----|-----
Fixed Duration | Work field updates | Resource unit updates| Work field updates
Fixed Work | Resource unit updates.Note: For manually scheduled task work will update.| Duration field updates. Note: For manually scheduled task resource unit updates. |Duration will update. Note: For manually scheduled task work field updates.
Fixed Unit | Work field updates | Duration field updates. Note: For manually scheduled task resource unit updates.| Duration will update. Note: For manually scheduled task work field updates.

## Work limitations

Work and task types have the following constraints:
- Milestones (zero-duration tasks) do not support work calculations, as they lack duration.
- Manually scheduled tasks override automatic calculations, allowing manual control over `work`, `duration`, or `resourceUnit`, which may lead to scheduling inconsistencies.
- Editing work or task types requires `EditService` for dialogs or taskbar interactions.
- Invalid `workUnit` values (e.g., not Hour, Day, or Minute) may cause calculation errors.
- Work calculations rely on [resourceInfo](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#resourceinfo) for accurate resource unit allocation.

## See also
- [How to configure resources?](https://ej2.syncfusion.com/angular/documentation/gantt/resources)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to configure critical path?](https://ej2.syncfusion.com/angular/documentation/gantt/critical-path)