---
layout: post
title: Set Vertical Scroll Position in Angular Gantt Chart Component | Syncfusion
description: Learn how to programmatically set the vertical scroll position in the Syncfusion Angular Gantt Chart component for efficient navigation in large project datasets.
platform: ej2-angular
control: Scroll position
documentation: ug
domainurl: ##DomainURL##
---

# Set Vertical Scroll Position in Angular Gantt Chart component

The [setScrollTop](https://ej2.syncfusion.com/angular/documentation/api/gantt#setscrolltop) method in the Angular Gantt Chart component enables programmatic control of the vertical scroll position, allowing efficient navigation to specific tasks in large project datasets. By specifying a numeric pixel value (e.g., `100` for 100px), you can scroll the grid portion of the Gantt (task rows) to focus on a desired task or area. For example, clicking a button to scroll to a task at row 50 enhances user experience in projects with thousands of tasks. Ensure the Gantt has a defined `dataSource` and `height` (e.g., "600px") to calculate the scrollable content area accurately. Use pixel-based scroll values to position the viewport precisely, with the maximum scroll limited by the total content height, which varies with dataset size or when [enableVirtualization](https://ej2.syncfusion.com/angular/documentation/api/gantt#enablevirtualization) is enabled for optimized performance. This method integrates seamlessly with virtual scrolling and row selection (via [selectedRowIndex](https://ej2.syncfusion.com/angular/documentation/api/gantt#selectedrowindex)), making it ideal for automating navigation, such as scrolling to a newly added task or a selected task, enhancing project management workflows.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/setscrolltop-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/setscrolltop-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/samples/gantt/how-to/setscrolltop-cs1" %}

## See also
- [How to configure virtual scrolling?](https://ej2.syncfusion.com/angular/documentation/gantt/scrolling/virtual-scrolling)
- [How to configure row selection?](https://ej2.syncfusion.com/angular/documentation/gantt/selection)
- [How to manage task editing?](https://ej2.syncfusion.com/angular/documentation/gantt/managing-tasks/editing-tasks)