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

The scrollbar will be displayed in the gantt when content exceeds the element `width` or `height`. The vertical and horizontal scrollbars will be displayed based on the following criteria:

* The vertical scrollbar appears when the total height of rows present in the gantt exceeds its element height.
* The horizontal scrollbar appears when the sum of columns width exceeds the grid pane size.
* The [height](https://ej2.syncfusion.com/angular/documentation/api/gantt/#height) and [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/#width) are used to set the gantt height and width, respectively.

> The default value for `height` and `width` is `auto`.

## Set width and height

We can even set pixel values to width and height of gantt container using [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/gantt/#height) properties.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/scrolling-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/scrolling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/scrolling-cs1" %}

## Responsive with the parent container

Specify the [width](https://ej2.syncfusion.com/angular/documentation/api/gantt/#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/gantt/#height) as `100%` to make the gantt element fill its parent container.
Setting the `height` to `100%` requires the gantt parent element to have explicit height. Also, the component will be responsive when the parent container is resized.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/responsive-scrolling-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/responsive-scrolling-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/responsive-scrolling-cs1" %}
