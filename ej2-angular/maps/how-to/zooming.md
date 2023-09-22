---
layout: post
title: Zooming in Angular Maps component | Syncfusion
description: Learn here all about Zooming in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Zooming 
documentation: ug
domainurl: ##DomainURL##
---

# Zooming in Angular Maps component

The center position zooming can be achieved by using the [`centerPosition`](https://ej2.syncfusion.com/angular/documentation/api/maps/#centerposition) and [`zoomFactor`](https://ej2.syncfusion.com/angular/documentation/api/maps/zoomSettingsModel/#zoomfactor) properties as mentioned in the following example. The center position is used to configure the zoom level of Maps, and the zoom factor is used to specify the center position where the Maps should be displayed.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs45/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs45/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs45/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs45" %}