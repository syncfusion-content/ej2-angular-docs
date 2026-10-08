---
layout: post
title: Style and Appearance in Angular Gantt Chart Component | Syncfusion
description: Learn how to customize the style and appearance of the Syncfusion Angular Gantt Chart component with CSS overrides and grid line configurations.
platform: ej2-angular
control: Style and appearance
documentation: ug
domainurl: ##DomainURL##
---

# Style and Appearance in Angular Gantt Chart Component

Customize the appearance of the Angular Gantt Chart by overriding default CSS styles. The Angular Gantt Chart provides a comprehensive set of CSS classes for targeting specific sections, allowing a tailored design that matches application branding. [Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=tailwind3) can create custom themes for all JavaScript controls.

## Customizing Angular Gantt Chart root element

The `.e-gantt` class is the root container for the entire Angular Gantt Chart. Customize this element to control global appearance including font family, background color, and overall spacing:

```css
.e-gantt *:not(.e-icons):not(.e-check):not(.e-frame) {
    font-family: cursive !important;
}
```

Properties such as `font-family`, `background-color`, and spacing-related styles can be adjusted to align with the Gantt design.

![Customizing root element](../images/gantt-chart-root-element.png)

This customization applies a cursive font to the Angular Gantt Chart content. Additional styling can be applied to rows, alternate rows, selected rows, and hover states. Avoid using `!important` for hover styles in production environments. Instead, increase selector specificity to maintain consistent styling control.

## Styling the grid section

### Customizing grid headers in Angular Gantt Chart

The grid header in the Angular Gantt Chart contains column headers and table structures. Customize the header appearance and styling using the following CSS classes:

```css
.e-gridheader {
   color: #1976d2 !important;
}
.e-headercelldiv {
    font-size: 36px;
}
.e-headercell {
    background: #e3f2fd !important;
}
.e-columnheader{
    color: #1976d2 !important;
}
```

Properties such as `background-color`, `border`, `font-weight`, and `padding` can be adjusted to align with the Gantt design.

![Customizing header](../images/gantt-header.png)

### Customizing grid content and rows

Style the grid content area that displays task data in a tabular format. Use these CSS classes to modify rows, cells, and alternate row appearance:

```css
.e-gridcontent {
    background-color: #f5f5f5;
}
.e-table {
    border: 1px solid #ccc;
}
.e-row {
    background-color: #ffffff;
    color: #333;
}
.e-altrow {
    background-color: #e8f4fd;
}
.e-rowcell {
    border-color: #ddd;
    padding: 8px;
}
```

Properties such as `background-color`, `border`, `font-weight`, and `padding` can be adjusted to align with the Gantt design.

![Customizing grid content](../images/grid-content.png)

## Styling the chart section

### Customizing chart content and background

The chart content displays taskbars and the timeline visualization. Apply CSS to modify the chart area appearance and styling:

```css
.e-gantt-chart {
    background-color: #fafafa;
    border: 1px solid #ddd;
}
.e-chart-row {
    background-color: #ecf7ff;
}
.e-chart-row:hover {
    background-color: #fff3cd;
}
```

Properties such as `background-color`, `border`, and `height` can be adjusted to align with the Gantt design.

![Customizing chart content](../images/gantt-chart-content.png)

### Customizing timeline headers and date display

The timeline displays date information and task scheduling. Style the timeline header and date cells using these CSS classes:

```css
.e-timeline-header-container {
    background: #e3f2fd !important;
}

.e-header-cell-label {
    color: #0d47a1 !important;
    font-weight: bold;
}
.e-weekend-header-cell{
    background: #fce4ec !important;
}
```

Properties such as `background-color`, `border`, `font-weight`, and `padding` can be adjusted to align with the Gantt design.

![Customizing timeline](../images/gantt-timeline.png)

### Customizing taskbars and progress indicators

The taskbar represents tasks visually on the timeline. Customize parent taskbars, child taskbars, milestones, and unscheduled tasks using these CSS classes:

```css
.e-taskbar-main-container {
    border: 1px solid #e0e0e0;
}

.e-gantt-parent-taskbar-inner-div {
    background-color: #1976d2 !important;
}

.e-gantt-parent-progressbar-inner-div {
    background-color: #0d47a1 !important;
}

.e-gantt-child-taskbar-inner-div {
    background-color: #7b1fa2 !important;
}

.e-gantt-child-progressbar-inner-div {
    background-color: #4a148c !important;
}

.e-gantt-milestone {
    background-color: #ff9800 !important;
}

.e-gantt-unscheduled-taskbar {
    background-color: #f44336 !important;
    opacity: 0.7;
}

.e-gantt-manualparenttaskbar {
    border: 2px dashed #1976d2 !important;
}

.e-gantt-child-manualtaskbar {
    border: 2px dashed #7b1fa2 !important;
}

.e-gantt-unscheduled-manualtask {
    background-color: #f44336 !important;
    border: 2px dashed #f44336 !important;
    opacity: 0.7;
}
```

Properties such as `background-color`, `border`, `height`, and `border-radius` can be adjusted to align with the Gantt design.

![Customizing taskbar](../images/gantt-taskbar.png)

### Customizing baseline bars and milestones

The baseline in the Angular Gantt Chart represents planned task schedules for comparison with actual progress. Customize baseline bars and milestones using these CSS classes:

```css
.e-baseline-bar {
    background-color: #fdb9c9 !important;
}

.e-baseline-gantt-milestone-container {
    background-color: #fdb9c9 !important;
}
```

Properties such as `background-color` and `height` can be adjusted to align with the Gantt design.

![Customizing baseline](../images/gantt-baseline.png)

### Customizing connector lines for task dependencies

The connector lines in the Angular Gantt Chart show dependencies between tasks. Apply CSS to modify the connector line appearance and styling:

```css
.e-connector-line {
    stroke: #ab6060fc !important;
    stroke-width: 2px;
}   
.e-connector-line-arrow {
    fill: #ab6060fc !important;
}
```

Properties such as `stroke`, `stroke-width`, and `fill` can be adjusted to align with the Gantt design.

![Customizing connector lines](../images/gantt-connector-lines.png)

### Customizing splitter and resize handlers

The splitter divides the grid and chart sections, while resize handlers allow users to adjust the splitter position. Style these elements using the following CSS classes:

```css
.e-gantt .e-split-bar {
    background-color: #add8e6 !important;
    border: 1px solid #87ceeb;
}
.e-gantt .e-resize-handler {
    background-color: #0d6efd !important;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: 1px solid #0d47a1;
}
.e-gantt .e-arrow-left, .e-gantt .e-arrow-right {
    color: green !important;
    font-size: 12px;
}
.e-gantt .e-resize-handler:hover {
    background-color: #f0f0f0 !important;
}
```

Properties such as `background-color`, `border`, `width`, `height`, and `border-radius` can be adjusted to align with the Gantt design.

![Customizing splitter](../images/gantt-splitter.png)

This customization applies a light blue background to the split bar and styles the resize handler with a circular appearance. Additional styling can be applied to arrow icons and hover states. Avoid using `!important` for hover styles in production environments. Instead, increase selector specificity to maintain consistent styling control.

### Customizing task labels and text display

The labels in the Angular Gantt Chart display task information on the taskbars. Apply CSS to modify the label appearance and styling:

```css
.e-label {
    color: #0d47a1 !important;
    font-size: 12px;
}

.e-right-label-container {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 2px 4px;
    border-radius: 3px;
}

.e-left-label-container {
    background-color: rgba(255, 255, 255, 0.9);
    padding: 2px 4px;
    border-radius: 3px;
}
```

Properties such as `color`, `font-weight`, `font-size`, `background-color`, and `padding` can be adjusted to align with the Gantt design.

![Customizing labels](../images/gantt-labels.png)

### Customizing event markers and timeline indicators

The event markers in the Angular Gantt Chart highlight important dates or milestones on the timeline. Apply CSS to modify the event marker appearance and styling:

```css
.e-event-markers {
    border-left-color: #7b1fa2 !important;
}

.e-event-markers .e-span-label {
    background-color: #f3e5f5 !important;
    color: #4a148c !important;
}
```

Properties such as `border-left-color`, `background-color`, `color`, and `font-weight` can be adjusted to align with the Gantt design.

![Customizing event markers](../images/gantt-event-markers.png)

### Customizing tooltip content and appearance

The tooltip in the Angular Gantt Chart displays detailed information when hovering over tasks or elements. Apply CSS to modify the tooltip appearance and styling. Note: Use `.e-tooltip-wrap` for most tooltip styling and `.e-gantt-tooltip` for additional customization:

```css
.e-tooltip-wrap {
    background: #a9e0f4 !important;
}

.e-gantt-tooltip {
    background-color: #80b9f5 !important;
    color: #333 !important;
    border: 1px solid #87ceeb;
    border-radius: 4px;
    padding: 8px;
}
```

Properties such as `background-color`, `color`, `border`, `border-radius`, and `padding` can be adjusted to align with the Gantt design.

![Customizing tooltip](../images/gantt-tooltip.png)
  
## Complete code example with CSS customization

Below is a complete example demonstrating how to customize multiple aspects of the Angular Gantt Chart using CSS classes:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/style-appearance-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/style-appearance-cs1/src/main.ts %}
{% endhighlight %}

{% highlight htnl tabtitle="index.html" %}
{% include code-snippet/gantt/style-appearance-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/style-appearance-cs1" %}

![style and appearance](../images/style-and-appearance.png)

## Configuring grid lines in the Angular Gantt Chart

Grid lines on the tree grid and chart sections can be shown or hidden using the [gridLines](https://ej2.syncfusion.com/angular/documentation/api/gantt#gridlines) property. This property controls the visibility of grid lines throughout the component. The available grid line options are:

 - **Horizontal**: Displays only horizontal grid lines.
 - **Vertical**: Displays only vertical grid lines.
 - **Both**: Displays both horizontal and vertical grid lines.
 - **None**: Hides all grid lines from the component.

N> By default, the `gridLines` property is set to **Horizontal** type.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/appearance-customization/gridlines-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/appearance-customization/gridlines-cs1/src/main.ts %}
{% endhighlight %}

{% highlight ts tabtitle="datasource.ts" %}
{% include code-snippet/gantt/appearance-customization/gridlines-cs1/src/data.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/appearance-customization/gridlines-cs1" %}

## See also

- [How to customize taskbars?](https://ej2.syncfusion.com/angular/documentation/gantt/taskbar)
- [How to configure timeline?](https://ej2.syncfusion.com/angular/documentation/gantt/timeline)
- [How to manage columns?](https://ej2.syncfusion.com/angular/documentation/gantt/columns)
