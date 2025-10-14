---
layout: post
title: Scrolling in Angular Gantt component | Syncfusion
description: Learn here all about Scrolling in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in Angular Gantt component

Scrolling in the Angular Gantt component enables smooth navigation across extensive project datasets and long timelines. It ensures taskbars, grid rows, and timeline cells remain visible within the viewport. Scrollbars automatically appear when content exceeds the component’s defined [height](https://ej2.syncfusion.com/angular/documentation/api/gantt/#height) and [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/#width), supporting vertical scrolling for rows, horizontal scrolling for columns, and timeline scrolling for extended chart areas.

Virtual scrolling enhances performance by rendering only the visible portion of the dataset. Scrollbars are equipped with ARIA labels for accessibility, making them compatible with screen readers. They also adapt to responsive layouts, although horizontal scrolling may be required on narrow screens with wide timelines.

> By default, both `height` and `width` are set to **auto**.

## Configure scrollbar display

Scrollbars appear based on content size:

- **Vertical scrollbar:** Triggers when task row height exceeds the component’s height.
- **Horizontal scrollbar:** Triggers when column width exceeds the tree grid pane.
- **Timeline scrollbar:** Triggers when the timeline exceeds the chart area.

For precise layout control, set fixed dimensions using pixel values for both [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/gantt/#height).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scrolling-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scrolling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/scrolling-cs1" %}

## Configure responsive scrolling

You can make the Gantt component responsive by setting its [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/gantt/#height) to **100%**, allowing it to fully occupy the parent container. When height is set to **100%**, the parent element must have a defined `height` to support proper layout rendering. The Gantt will automatically adjust when the container is resized.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/responsive-scrolling-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/responsive-scrolling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/responsive-scrolling-cs1" %}

## Scroll to task row and timeline

The Angular Gantt component provides built-in support for automatically scrolling to specific tasks and timeline positions, which is especially useful when working with large datasets.

To scroll vertically to a specific task row, use the [selectRow](https://ej2.syncfusion.com/angular/documentation/api/gantt/#selectrow) method to select the desired task and apply [setScrollTop](https://ej2.syncfusion.com/angular/documentation/api/gantt/#setscrolltop) to bring the selected row into view.

To scroll horizontally to a specific timeline date, use the [scrollToDate](https://ej2.syncfusion.com/angular/documentation/api/gantt/#scrolltodate) method. This helps focus the timeline on a particular point in time.

To scroll directly to a specific task within the timeline, use the [scrollToTask](https://ej2.syncfusion.com/angular/documentation/api/gantt/#scrolltotask) method with the task ID. This ensures the task is visible within the timeline view.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scrolling-select/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scrolling-select/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/scrolling-select" %}

## Synchronize horizontal scroll between Gantt charts

To synchronize horizontal scrolling across multiple Gantt components, handle the [actionComplete](https://ej2.syncfusion.com/angular/documentation/gantt/events#actioncomplete) event with the **HorizontalScroll** action. This captures the scroll position of the first Gantt chart and applies it to the second Gantt using the `scrollLeft` property. This approach ensures aligned timeline navigation, which is especially useful for comparing related project data side-by-side, such as parallel schedules.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scroll-synchronize/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scroll-synchronize/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/scroll-synchronize" %}