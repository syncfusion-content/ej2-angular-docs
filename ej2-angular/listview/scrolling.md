---
layout: post
title: Scrolling in Angular ListView component | Syncfusion
description: Learn here all about Scrolling in Syncfusion Angular ListView component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: ListView 
documentation: ug
domainurl: ##DomainURL##
---

# Scrolling in Angular ListView component

The ListView component provides built-in scrolling capabilities that enable dynamic content loading and enhanced user interaction. You can implement infinite scrolling patterns to load additional data as users navigate through large datasets, creating smooth and responsive list experiences.

Render the ListView with `dataSource`, and bind the [scroll](https://ej2.syncfusion.com/angular/documentation/api/list-view/#scroll) event. Within the scroll event, you can access detailed scroll information including the scroll direction, event name, and the distance from the scrollbar to the top and bottom ends through the `distanceY` parameter.

In the following example, new data is seamlessly added during scrolling operations. When you scroll to the bottom and the remaining scroll distance is less than 100 pixels, the component dynamically loads a batch of items into the list as long as additional items are available to render.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/listview/scrolling/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/listview/scrolling/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/listview/scrolling" %}