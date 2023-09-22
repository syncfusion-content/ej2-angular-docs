---
layout: post
title: Marker type in Angular Maps component | Syncfusion
description: Learn here all about Marker type in Syncfusion Angular Maps component of Syncfusion Essential JS 2 and more.
platform: ej2-angular
control: Marker type 
documentation: ug
domainurl: ##DomainURL##
---

# Marker type in Angular Maps component

## Add different types of markers

Different marker objects can be added to the Maps component using the marker settings. To update different marker settings in Maps, please follow the given steps:

**Step 1**:

Initialize the Maps component with marker settings. Here, a marker has been added with specified latitude and longitude of California by using the [`dataSource`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#datasource) property. To customize the shape of the marker using the [`shape`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#shape) property and change the border color and width of the marker using the [`border`](https://ej2.syncfusion.com/angular/documentation/api/maps/markerSettingsModel/#border) property as mentioned in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs43/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs43/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs43/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs43" %}

**Step 2**:

Customize the above option for n number of markers as mentioned in the following example.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/maps/default-map/datetime-cs44/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="app.module.ts" %}
{% include code-snippet/maps/default-map/datetime-cs44/src/app.module.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/maps/default-map/datetime-cs44/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "page.domainurl/samples/maps/default-map/datetime-cs44" %}