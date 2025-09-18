---
layout: post
title: Resource multi taskbar in Angular Gantt component | Syncfusion
description: Learn how to configure the resource multi taskbar in the Syncfusion Angular Gantt component to visualize multiple tasks per resource in resource view.
platform: ej2-angular
control: Resource multi taskbar
documentation: ug
domainurl: ##DomainURL##
---

# Resource multi taskbar in Angular Gantt component

The resource multi taskbar feature in the Angular Gantt component visualizes multiple tasks assigned to a single resource in one row when collapsed in resource view, enabled by setting [`enableMultiTaskbar`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablemultitaskbar) to `true` and `viewType` to `ResourceView`. This displays workloads, such as concurrent tasks assigned to a resource, like coding activities, in a compact timeline, highlighting overallocation or scheduling conflicts. Taskbars maintain individual properties (e.g., duration, progress) and support editing in collapsed rows, with expand/collapse controlled via grid-side arrows for visual consistency. The feature requires valid [`resourceInfo`](https://ej2.syncfusion.com/angular/documentation/api/gantt/taskFields/#resourceinfo) mappings in `taskFields` to associate tasks with resources. Taskbars include ARIA labels for accessibility and adapt to responsive designs, though narrow screens may clip labels for short tasks. By default, `enableMultiTaskbar` is `false`, requiring explicit activation.

## Configure multi taskbar

Enable the multi taskbar feature by setting [`enableMultiTaskbar`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#enablemultitaskbar) to `true` and `viewType` to `ResourceView`, with `taskFields.resourceInfo` mapping to a resource ID field. Resources are collapsed or expanded using grid-side arrows, and tasks are displayed in a single row when collapsed.

```typescript
export class AppComponent {
    public enableMultiTaskbar: boolean = true;
    public viewType: string = 'ResourceView';
    public taskSettings: object = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        resourceInfo: 'Resources'
    };
}
```

The following example demonstrates multi taskbar configuration:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/resourceview/multitaskbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/resourceview/multitaskbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/resourceview/multitaskbar-cs1" %}

## Configure taskbar overlap

The [`allowTaskbarOverlap`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#allowtaskbaroverlap) property controls how multiple taskbars are displayed in a resource row:
- **Overlapping mode** (`true`, default): Taskbars overlap within standard row height, supporting full dependency connections, including between tasks of the same resource. Suitable for compact views with many tasks.
- **Non-overlapping mode** (`false`): Taskbars are vertically arranged in an extended row height, preventing overlap for clearer visibility of overallocation. Dependencies between tasks of the same resource are not supported due to vertical stacking, though inter-resource dependencies work.

The following example disables taskbar overlap:

```typescript
export class AppComponent {
    public enableMultiTaskbar: boolean = true;
    public allowTaskbarOverlap: boolean = false;
    public viewType: string = 'ResourceView';
}
```

The following example demonstrates non-overlapping multi taskbar:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/resourceview/multitaskbar-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/resourceview/multitaskbar-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/resourceview/multitaskbar-cs3" %}

This configuration extends row height for clear task separation, ideal for identifying conflicts in small teams, but limits same-resource dependencies. Use overlapping mode for projects requiring extensive dependency mapping.

## See also
- [How to configure resource view?](https://ej2.syncfusion.com/angular/documentation/gantt/resource-view)
- [How to manage task dependencies?](https://ej2.syncfusion.com/angular/documentation/gantt/taskdependency)
- [How to allocate resources?](https://ej2.syncfusion.com/angular/documentation/gantt/resources)