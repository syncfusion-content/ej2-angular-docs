---
layout: post
title: Maintain zoom to fit in Angular Gantt component | Syncfusion
description: Learn here all about Maintain zoom to fit in Syncfusion Angular Gantt component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Maintain zoom to fit 
documentation: ug
domainurl: ##DomainURL##
---

# Maintain zoom to fit in Angular Gantt component

In the Gantt control, While performing edit actions or dynamically change dataSource, the timeline gets refreshed. When zoomToFit toolbar item is clicked and perform editing actions or dynamically change dataSource, the timeline gets refreshed. So that, the timeline will not fit to the project any more.

## Maintain zoomToFit after edit actions

We can maintain `zoomToFit` after editing actions(cell edit,dialog edit,taskbar edit) by using [`fitToProject`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#fittoproject) method in `actionComplete` and `taskbarEdited` event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/maintainzoomtofit-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/how-to/maintainzoomtofit-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/maintainzoomtofit-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/how-to/maintainzoomtofit-cs1" %}

## Maintain zoomToFit after change dataSource dynamically

We can maintain `zoomToFit` after change dataSource dynamically, by calling [`fitToProject`](https://ej2.syncfusion.com/angular/documentation/api/gantt/#fittoproject) method in dataBound event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/gantt/how-to/maintainzoomtofitdatasource-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/gantt/how-to/maintainzoomtofitdatasource-cs1/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/gantt/how-to/maintainzoomtofitdatasource-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/gantt/how-to/maintainzoomtofitdatasource-cs1" %}