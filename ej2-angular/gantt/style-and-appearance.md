---
layout: post
title: Style and appearance in Angular Gantt component | Syncfusion
description: Learn how to customize the style and appearance of the Syncfusion Angular Gantt component with CSS overrides and grid line configurations.
platform: ej2-angular
control: Style and appearance
documentation: ug
domainurl: ##DomainURL##
---

# Style and appearance in Angular Gantt component

The Angular Gantt component’s appearance is customized by overriding default CSS styles to align with application designs, using classes for taskbars, milestones, and grid elements. The [`queryTaskbarInfo`](https://ej2.syncfusion.com/angular/documentation/gantt/events#querytaskbarinfo) event modifies taskbar styles dynamically, while grid lines are configured with [`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#gridlines) for horizontal, vertical, or both. Custom themes are created via [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material). Styles include ARIA labels for accessibility, ensuring screen reader compatibility, and adapt to responsive designs, though narrow screens may require adjustments for taskbar visibility.

## CSS class reference

The Gantt component uses CSS classes for styling, organized by functional areas:
- **Core structure**:
  - `e-gantt`: Root container for the entire component.
  - `e-gridheader`: Header container separating headers from content.
  - `e-table`: Header table for full-width rendering.
  - `e-columnheader`: Header row for column titles and sorting indicators.
- **Content area**:
  - `e-gridcontent`: Main content container for background and layout.
  - `e-table`: Content table for task data.
  - `e-row`: Individual task row styling and spacing.
  - `e-altrow`: Alternate row styling for readability.
  - `e-rowcell`: Individual cell styling and alignment.
- **Chart and timeline**:
  - `e-gantt-chart`: Chart container for timeline visualization.
  - `e-chart-row`: Chart row alignment with grid rows.
  - `e-timeline-header-container`: Timeline header for date labels.
  - `e-header-cell-label`: Timeline header cell text formatting.
  - `e-weekend-header-cell`: Weekend header cells.
- **Taskbar elements**:
  - `e-taskbar-main-container`: Main taskbar container for positioning.
  - `e-gantt-parent-taskbar`: Parent taskbar styling.
  - `e-gantt-child-taskbar`: Child taskbar appearance.
  - `e-gantt-milestone`: Milestone diamond shape.
  - `e-gantt-unscheduled-taskbar`: Unscheduled taskbars.
  - `e-gantt-manualparenttaskbar`: Manual parent taskbar.
  - `e-gantt-child-manualtaskbar`: Manual child taskbar.
  - `e-gantt-unscheduled-manualtask`: Unscheduled manual task.
  - `e-parent-taskbar-inner-div`: Parent taskbar inner.
  - `e-child-taskbar-inner-div`: Child taskbar inner.
  - `e-child-progress-resizer`: Child progress resizer.
- **Dependency lines**:
  - `e-line`: Dependency line base style.
  - `e-connector-line-right-arrow`: Right-side arrowhead.
  - `e-connector-line-left-arrow`: Left-side arrowhead.
- **Additional elements**:
  - `e-gantt-tooltip`: Tooltip container for task details.
  - `e-left-label-container`: Left label container.
  - `e-right-label-container`: Right label container.
  - `e-header-cell-label`: Header cell labels.
  - `e-task-label`: Task labels.
  - `e-taskbar-left-resizer`: Left taskbar resizer.
  - `e-taskbar-right-resizer`: Right taskbar resizer.
  - `e-weekend-container`: Weekend container.
  - `e-left-label-inner-div`: Left label inner.
  - `e-right-label-inner-div`: Right label inner.
  - `e-left-resize-gripper`: Left resizer gripper.
  - `e-right-resize-gripper`: Right resizer gripper.
  - `e-connectorpoint-left`: Left connector point.
  - `e-connectorpoint-right`: Right connector point.
  - `e-child-progressbar-inner-div`: Child progress bar inner.
  - `e-parent-progressbar-inner-div`: Parent progress bar inner.
  - `e-row-expand`: Row expand.
  - `e-row-collapse`: Row collapse.
  - `e-progressbar-handler`: Progress bar handler.
  - `e-connectorpoint-left-hover`: Connector point left hover.
  - `e-connectorpoint-right-hover`: Connector point right hover.
  - `e-baseline-bar`: Baseline bar.

## Override default styles

Override default CSS styles for custom appearance, using classes like `.e-gantt .e-gantt-parent-taskbar` for parent taskbars or `.e-gantt .e-gantt-milestone` for milestones. Theme Studio customizes themes across components.

The following example overrides taskbar and milestone styles:

```css
/* Customize child taskbar appearance */
.e-gantt .e-gantt-parent-taskbar {
    background-color: #28a745;
    border-color: #1e7e34;
}

/* Customize milestone appearance */
.e-gantt .e-gantt-milestone {
    background-color: #ff6600;
    border-color: #cc5200;
}
```

### Grid appearance customization

```css
/* Customize alternate row colors */
.e-gantt .e-altrow {
    background-color: #f8f9fa;
}

/* Customize cell borders */
.e-gantt .e-rowcell {
    border-right: 1px solid #dee2e6;
}
```

## Configure grid lines

Control grid line visibility with [`gridLines`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#gridlines):
- `Horizontal`: Shows only horizontal lines for row separation.
- `Vertical`: Shows only vertical lines for column separation.
- `Both`: Shows both for full grid structure.
- `None`: Hides all lines for minimal appearance.

The following example configures both grid lines:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/gridlines-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/gridlines-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/appearance-customization/gridlines-cs1" %}

By default, `gridLines` is `Horizontal`.

## See also
- [How to customize taskbars?](https://ej2.syncfusion.com/angular/documentation/gantt/taskbar)
- [How to configure timeline?](https://ej2.syncfusion.com/angular/documentation/gantt/timeline)
- [How to manage columns?](https://ej2.syncfusion.com/angular/documentation/gantt/columns)