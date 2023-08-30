---
layout: post
title: Virtual scrolling in Angular Schedule component | Syncfusion
description: Learn here all about Virtual scrolling in Syncfusion Angular Schedule component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Virtual scrolling 
documentation: ug
domainurl: ##DomainURL##
---

# Virtual scrolling in Angular Schedule component

To achieve better performance in the Scheduler when loading a large number of resources and events, we have added virtual scrolling support in the timeline views to load a large set of resources and events instantly as you scroll. You can dynamically load large number of resources and events in timeline view of the Scheduler by setting `true` to the `allowVirtualScrolling` property within the timeline view-specific settings. The virtual loading of events is possible in Agenda view, by setting `allowVirtualScrolling` property to `true` within the agenda view specific settings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/schedule/default-cs88/app/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/schedule/default-cs88/app/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/schedule/default-cs88/app/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/schedule/default-cs88" %}

![Displaying Virtual Scrolling in Schedule](images/schedule-virtualscrolling.gif)

> For now, the virtual loading of resources and events is available only `TimelineDay`, `TimelineWeek`, `TimelineWorkWeek`, `TimelineMonth` and `TimelineYear` (Vertical Orientation alone) views. In the future, we plan to port the same virtual loading on all other applicable Scheduler views.

## See Also

* [Virtual scrolling in Agenda view](./views/#agenda-view)

> You can refer to our [Angular Scheduler](https://www.syncfusion.com/angular-components/angular-scheduler) feature tour page for its groundbreaking feature representations. You can also explore our [Angular Scheduler example](https://ej2.syncfusion.com/angular/demos/#/material/schedule/overview) to knows how to present and manipulate data.
